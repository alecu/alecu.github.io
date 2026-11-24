// Per-game key templates for phones and tablets. A template names the keys one program uses, groups them and
// says which matter most; the page places the groups beside the screen (phone on its side) or under it.
//
// disks: patterns for the floppy names that choose this template.
// pages: the first page shows first; a button in the key bar steps to the next. A page has either
//   pad:     arrow keys with one key in the middle, on the left, and
//   buttons: a grid of keys on the right, `columns` wide; or
//   digits:  true for a 0-9 pad on the right, with the `side` keys on the left.
// A key has
//   key:       a letter or digit, or space, return, backspace, left, up, down, right;
//   label:     what the button says (the Lisa key is shown under it when the label does not say it);
//   tone:      'main' for the most-used actions, 'danger' for one that must not be hit by accident;
//   size:      'large' or 'small' (button height); span: how many grid columns it takes;
//   longPress: ms the finger must stay before the key is sent, then once, briefly; hint: a note under the label.

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
