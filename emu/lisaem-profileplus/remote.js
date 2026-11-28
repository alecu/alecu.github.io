// The Remote panel (development builds with the ProfilePlus mock, `make PROFILEPLUS=...`).
//
// It plays the part a Synergy server or the ESP32 web UI will play: the host's mouse and keys go to the
// Lisa through the mock ESProFile and the ProfilePlus driver running under the Office System, and the
// screen shown is the one the driver sent back over the parallel port, not the emulator's frame buffer.
//
// RemoteController holds the logic (Node tests use it with a real machine); mountRemotePanel wires it to
// the page.
import { KEYMAP, PP, SCREEN_W, SCREEN_H } from './js/lisa.js';

export class RemoteController {
  /** @param {import('../js/lisa.js').ProfilePlus} pp */
  constructor(pp) {
    this.pp = pp;
    this.inside = false;       // the host pointer is over the remote screen
    this.streaming = false;    // the driver sends changes continuously
    this.button = false;
    this.held = new Set();     // Lisa key codes we hold down
    this.last = { x: -1, y: -1 };
    this.seen = 0;             // count of the last screen handed out by poll()
  }

  /** The host pointer came over the remote screen, at Lisa pixel (x, y). */
  enter(x, y) {
    this.inside = true;
    this.last = { x, y };
    this.pp.enter(x, y);
    this._flags();
  }

  /** The host pointer left: release whatever we hold, so nothing stays pressed on the Lisa. */
  leave() {
    if (!this.inside) return;
    this.releaseAll();
    this.inside = false;
    this.pp.leave();
    this._flags();
  }

  /** Pointer at Lisa pixel (x, y); only changes are sent. */
  move(x, y) {
    x = Math.max(0, Math.min(SCREEN_W - 1, Math.round(x)));
    y = Math.max(0, Math.min(SCREEN_H - 1, Math.round(y)));
    if (!this.inside) return this.enter(x, y);
    if (x === this.last.x && y === this.last.y) return;
    this.last = { x, y };
    this.pp.pointer(x, y);
  }

  setButton(down) {
    if (down === this.button) return;
    this.button = down;
    this.pp.button(down);
  }

  /** A browser KeyboardEvent.code went down or up. Returns true if it is a Lisa key. */
  key(code, down) {
    const k = KEYMAP[code];
    if (k === undefined) return false;
    if (down) {
      if (this.held.has(k)) return true;   // auto-repeat: the Lisa repeats keys itself
      this.held.add(k);
    } else if (!this.held.delete(k)) {
      return true;
    }
    this.pp.key(k, down);
    return true;
  }

  releaseAll() {
    for (const k of this.held) this.pp.key(k, false);
    this.held.clear();
    this.setButton(false);
  }

  /** One full screen from the driver. */
  requestScreen() { this.pp.requestScreen(PP.SCREEN_ONCE); }

  /** Continuous updates of the parts that change (or stop them). */
  setStreaming(on) {
    this.streaming = !!on;
    this.pp.requestScreen(on ? PP.SCREEN_CHANGES : PP.SCREEN_STOP, 10);
    this._flags();
  }

  /** The newest screen the driver sent, if it is newer than the last one returned; else null. */
  poll() {
    const s = this.pp.screen();
    if (!s || s.count === this.seen) return null;
    this.seen = s.count;
    return s;
  }

  /** What the driver has told the device so far. */
  status() {
    const info = this.pp.info(), st = this.pp.stats();
    if (!info.helloCount) return st.capsReads ? 'Driver found the device; opening a session…' : 'Waiting for the ProfilePlus driver on the Lisa…';
    return `Driver ${info.drvVer} connected; ${st.mailboxReads} polls, ${st.screens} screens received`;
  }

  _flags() { this.pp.setFlags({ active: this.inside, screen: this.streaming }); }
}

/** Wire the Remote panel in index.html to a machine; returns a function that refreshes it. */
export function mountRemotePanel(doc, lisa) {
  const $ = (id) => doc.getElementById(id);
  const card = $('remoteCard');
  if (!lisa?.pp) { if (card) card.hidden = true; return () => {}; }
  card.hidden = false;
  const remote = new RemoteController(lisa.pp);
  const xy = (e) => {
    const r = live.getBoundingClientRect();
    return [(e.clientX - r.left) * SCREEN_W / r.width, (e.clientY - r.top) * SCREEN_H / r.height];
  };
  const fresh = (el, type, fn) => { const c = el.cloneNode(true); el.replaceWith(c); c.addEventListener(type, fn); return c; };

  // Replace the elements so listeners from an earlier machine are dropped.
  const live = fresh($('remoteScreen'), 'pointermove', (e) => remote.move(...xy(e)));
  const live2d = live.getContext('2d');
  live.addEventListener('pointerenter', (e) => remote.enter(...xy(e).map(Math.round)));
  live.addEventListener('pointerleave', () => remote.leave());
  live.addEventListener('pointerdown', (e) => { live.focus(); remote.move(...xy(e)); remote.setButton(true); e.preventDefault(); });
  live.addEventListener('pointerup', () => remote.setButton(false));
  live.addEventListener('keydown', (e) => { if (remote.key(e.code, true)) e.preventDefault(); });
  live.addEventListener('keyup', (e) => { if (remote.key(e.code, false)) e.preventDefault(); });
  live.addEventListener('blur', () => remote.releaseAll());
  fresh($('btnRemoteShot'), 'click', () => remote.requestScreen());
  const stream = fresh($('remoteStream'), 'change', (e) => remote.setStreaming(e.target.checked));
  stream.checked = false;

  // Synergy: the client runs in the core; serve.mjs --synergy relays it to the server.
  let synergy = null;
  fresh($('btnSynergy'), 'click', () => {
    if (synergy && !synergy.closed) { synergy.close(); return; }
    const url = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/synergy`;
    synergy = lisa.pp.connectSynergy(url, { name: $('synergyName').value.trim() || 'lisa' });
  });

  live2d.fillStyle = '#fff';
  live2d.fillRect(0, 0, SCREEN_W, SCREEN_H);
  return () => {
    const s = remote.poll();
    if (s) live2d.putImageData(new ImageData(s.toRGBA(), s.width, s.height), 0, 0);
    $('remoteStatus').textContent = remote.status();
    if (synergy) {
      const st = synergy.state;
      $('btnSynergy').textContent = st === 'closed' ? 'Connect' : 'Disconnect';
      $('synergyStatus').textContent = st === 'closed'
        ? `Not connected${synergy.error ? ` (the server said ${synergy.error})` : ''}.`
        : st === 'connected' ? `Connected (${synergy.proto} protocol); ${synergy.stats().enters} visits to the Lisa.` : 'Connecting…';
    }
  };
}
