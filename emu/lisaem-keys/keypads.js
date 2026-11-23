// Per-game key templates for touch screens. A template names the keys a program uses, groups them, and
// says which matter most; the page places the groups for the screen's orientation.
//
// key: a letter or digit, or space, return, backspace, left, up, down, right.
// tone: 'main' for the most-used actions, 'danger' for one that should not be hit by accident.
// longPress: hold this long (ms) before the key is sent; it is then pressed once, briefly.
// span: how many columns of the button grid the key takes.

export const TEMPLATES = {
  sentinel: {
    name: 'The Sentinel',
    disks: [/sentinel/i],
    pages: [
      {
        name: 'Play',
        pad: { arrows: true, center: { key: 'space', label: 'Sight' } },
        columns: 6,
        buttons: [
          { key: 'a', label: 'Absorb', tone: 'main', span: 3, size: 'large' },
          { key: 'q', label: 'Transfer', tone: 'main', span: 3, size: 'large' },
          { key: 't', label: 'Tree', span: 2 }, { key: 'b', label: 'Boulder', span: 2 }, { key: 'r', label: 'Robot', span: 2 },
          { key: 'u', label: 'U-turn', span: 2, size: 'small' }, { key: 'm', label: 'Map', span: 2, size: 'small' },
          { key: 'return', label: 'Return', span: 2, size: 'small' },
          { key: 'h', label: 'Hyperspace', tone: 'danger', longPress: 400, span: 6, size: 'small', hint: 'hold' },
        ],
      },
      {
        name: '123',
        digits: true,
        side: [{ key: 'backspace', label: '⌫', aria: 'Delete' }, { key: 'return', label: 'Return', tone: 'main' }],
      },
    ],
  },
};

export function templateFor(diskName) {
  if (!diskName) return null;
  return Object.entries(TEMPLATES).find(([, t]) => t.disks.some((re) => re.test(diskName)))?.[0] ?? null;
}
