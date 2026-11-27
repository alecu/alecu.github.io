---
title: The Lisa Sentinel
layout: game
# Not one of the homepage cards: the homepage has its own section for it.
card: false
order: 6
years: 2026
tagline: Geoff Crammond's The Sentinel, ported to the Apple Lisa.
intro: >-
  A port of the 1986 classic to a computer that never had it. It runs the Amiga version's
  original 68000 code, draws in the Lisa's black-and-white pixels with the ZX Spectrum version's
  patterns, and plays the BBC Micro's music on the Lisa's speaker. Play it in your browser, or
  boot the floppy on a real Lisa 2.
image: /img/lisa-sentinel/title-hero.png
image_alt: The Sentinel's title screen on the Apple Lisa, with the title in large block letters and the Sentinel on its tower
description: The Sentinel for the Apple Lisa. Play it in your browser, or download the floppy for a 1 MiB Lisa 2 with Boot ROM H. Screenshots, system requirements, credits and how the port was made.
version: Beta8
released: November 26, 2026
play_url: /emu/lisaem/?disk=sentinel
disk:
  url: /downloads/lisa-sentinel/sentinel-lisa-beta8.dc42
  name: sentinel-lisa-beta8.dc42
  size: 410 KB
  sha256: b2924aaee1959492eef9d9b58bfb38aa8b44e2b5bd4c0a99aa6b71a2fa1a9342
  sums: /downloads/lisa-sentinel/sentinel-lisa-beta8-SHA256SUMS
guide:
  url: /downloads/lisa-sentinel/sentinel-lisa-player-guide.pdf
  size: 35 KB
  preview: img/lisa-sentinel/player-guide.png
# Each file is img/lisa-sentinel/<file>.png (720 x 546, smoothed for the page) and <file>-full.png
# (the raw 720 x 364 framebuffer at 2x horizontal and 3x vertical scale, for the full-size view).
screenshots:
  - file: loading
    alt: The loading screen, a black-and-white version of the Sentinel's eye artwork, with a progress bar
    caption: The loading screen, converted from the original artwork, fills its bar as the game loads.
  - file: landscape-0000
    alt: An aerial view of landscape 0000, a checkered landscape under a starry sky
    caption: Landscape 0000, the first of the game's 10,000.
  - file: sights
    alt: Two trees on a ridge under a striped sky, with a black cross outlined in white on the trunk of the left one
    caption: The sights, a cross drawn in the Lisa's own pixels. Aim at the base of a tree and press A to absorb it.
  - file: plain
    alt: A plain of black, white and grey checkered tiles, with trees on the ridge beyond
    caption: Trees, boulders and robots can only go on flat tiles.
  - file: boulder-robot
    alt: A robot standing on a boulder at the foot of a dark slope, with a tree on the ridge behind it
    caption: A robot on a boulder. Boulders let you build higher than the ground you stand on.
  - file: tree-and-robot
    alt: A tree and a robot seen up close on a checkered tile
    caption: Close up, every surface uses the Spectrum's patterns at the Lisa's resolution.
  - file: absorb
    alt: A robot dissolving into noise next to a tree
    caption: Absorbing a robot. Objects dissolve in and out, as in the original.
  - file: overview
    alt: An overview of the whole landscape with its trees, seen from above
    caption: Press M while looking at clear sky for an overview of the landscape.
  - file: next-code
    alt: The secret entry code 44881440 for landscape 0002, in block numbers, next to the Sentinel
    caption: Winning a landscape gives you the secret code for the next one you can play.
---
## Play it

### In your browser

[Play The Lisa Sentinel]({{ page.play_url | prepend: site.baseurl }}) in LisaEm Web, the LisaEm emulator compiled to WebAssembly. The disk loads and the Lisa starts up by itself, through the same Rev H boot ROM as a real Lisa 2. Click the screen so the Lisa gets the keyboard. On a phone or tablet, the page shows large buttons for the game's keys beside or under the screen.

### On a real Lisa

[Download the disk image]({{ page.disk.url | prepend: site.baseurl }}). It's a Disk Copy 4.2 image of a 400K floppy, with the 12-byte sector tags the Lisa's boot ROM checks. Put it on a floppy emulator that takes Disk Copy 4.2 images, or write it to a 400K disk with a tool that keeps the tags. Then start the Lisa from the floppy drive. No hard disk is needed.

### Controls

| Key | What it does |
|---|---|
| <kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> | Look around |
| Click / <kbd>Space</kbd> | Mouse sights / keyboard sights |
| <kbd>A</kbd> | Absorb what's in the sights |
| <kbd>T</kbd> <kbd>B</kbd> <kbd>R</kbd> | Create a tree, boulder or robot (1, 2 or 3 energy) |
| <kbd>Q</kbd> | Transfer into the robot in the sights |
| <kbd>H</kbd> | Hyperspace (3 energy) |
| <kbd>U</kbd> | U-turn |
| <kbd>M</kbd> | Overview of the landscape, while looking at clear sky. <kbd>Return</kbd> goes back. |

Start at landscape 0000. Absorb trees for energy, stack boulders, create robots on higher ground and transfer into them, until you can see the Sentinel's platform. Absorb the Sentinel, create a robot on its tower, transfer, and hyperspace out. Stay out of the Sentinel's sight while you climb: it drains your energy. The [player guide]({{ page.guide.url | prepend: site.baseurl }}) has the details and the codes for nine landscapes.

## System requirements

<dl class="spec-list">
    <dt>Computer</dt><dd>Apple Lisa 2 (2/5 or 2/10) with Boot ROM H</dd>
    <dt>Memory</dt><dd>1 MiB</dd>
    <dt>Drive</dt><dd>The Lisa 2's Sony 400K floppy drive, or a floppy emulator in its place</dd>
    <dt>Screen</dt><dd>The standard 720 &times; 364 display</dd>
    <dt>Input</dt><dd>Lisa keyboard and mouse</dd>
    <dt>Sound</dt><dd>The Lisa's built-in speaker</dd>
    <dt>Not supported</dt><dd>The Lisa 1 and its Twiggy drives, the Macintosh XL's 3A ROM, and Lisas with the screen modification kit</dd>
    <dt>In a browser</dt><dd>Any current desktop or mobile browser</dd>
</dl>

This is a beta. Beta4 won landscape 0000 on my Lisa 2/5, and beta5 played well there too. Since then, only beta7b's title music has been checked on the Lisa; everything else that changed has so far been checked in the emulator.

## Downloads

<ul class="download-list">
    <li>
        <a class="download-list__main" href="{{ page.disk.url | prepend: site.baseurl }}" download>
            <span class="download-list__title">Disk image, {{ page.version | downcase }}</span>
            <span class="download-list__meta">{{ page.disk.name }} &middot; Disk Copy 4.2, 400K &middot; {{ page.disk.size }}</span>
        </a>
        <p class="download-list__note">SHA-256 <code>{{ page.disk.sha256 }}</code> (<a href="{{ page.disk.sums | prepend: site.baseurl }}">checksum file</a>)</p>
    </li>
    <li class="download-list__with-preview">
        <a class="download-list__main" href="{{ page.guide.url | prepend: site.baseurl }}">
            <span class="download-list__title">Player guide</span>
            <span class="download-list__meta">PDF, one page &middot; {{ page.guide.size }}</span>
        </a>
        <p class="download-list__note">How to win, the Lisa controls, and the codes for nine landscapes, ready to print.</p>
        <img class="download-list__preview" src="{{ page.guide.preview | prepend: '/' | prepend: site.baseurl }}" alt="The one-page player guide" width="424" height="600" loading="lazy">
    </li>
</ul>

## How it was made

I made The Lisa Sentinel in October and November 2026, together with two AI coding agents, OpenAI's Codex and Anthropic's Claude.

The Lisa and the Amiga share a CPU, the Motorola 68000, so the port keeps the Amiga version's original code. Steve Bak's 1987 conversion still generates the landscapes, moves the Sentinel and its sentries, and works out every view. What the Lisa doesn't have are the Amiga's custom chips, so everything that used them was replaced with Lisa code: the drawing, the screen, the sound, the keyboard and the mouse.

The Lisa's screen is 720 &times; 364 black-and-white pixels, each one taller than it is wide. The ZX Spectrum version had already shown how to draw The Sentinel with two colours, so its patterns and screen layouts are the reference for the Lisa's. The Lisa draws each view itself, from the original engine's view angles, in its own pixels and corrected for their shape. It draws into one screen page while you look at the other, and swaps them during the vertical retrace. The title, landscape, code and victory screens are redrawn natively in the Spectrum layout.

The sound comes from the BBC Micro, where the game started. The Amiga code still carried the BBC version's sound and music routines, and its music data byte for byte. A small module plays them on the Lisa's speaker through the shift register of one of its VIA chips. The Lisa's keyboard and mouse talk to the original command handlers, so the controls work as on the Amiga.

The floppy boots with [Tom Stepleton's Lisa bootloader](https://github.com/stepleton/bootloader). While the game loads, it shows a black-and-white version of the original artwork with a progress bar.

To test the game automatically, we built [LisaEm Web](https://github.com/arcanebyte/lisaem/pull/100): the LisaEm emulator compiled to WebAssembly, with an interface that lets a program boot the Lisa, press keys, move the mouse and read the screen. Recorded games replay tick by tick: a win on landscape 0000, a loss to the Sentinel and a failed hyperspace. Each one has to match at every one of the game's 50 Hz ticks, from two cold boots. A 68000 harness built on Musashi replays the winning route at full speed. Along the way, the game uncovered bugs in LisaEm's 68000 and timer emulation, which LisaEm Web fixes. It's also the emulator that runs the game on this page.

The betas then go to my Lisa 2/5, for what an emulator can't show, like how the speaker sounds and how the mouse feels.

## Credits

<dl class="credit-list">
    <dt>The Sentinel</dt><dd>Geoff Crammond, for the BBC Micro (Firebird, 1986). Its sound effects and music play on the Lisa's speaker.</dd>
    <dt>Amiga version</dt><dd>Steve Bak, with audio by David Whittaker (1987). Its 68000 code runs the game on the Lisa.</dd>
    <dt>ZX Spectrum version</dt><dd>Mike Follin at Software Creations, with music by Tim Follin (1987). Its patterns and screens are the model for the Lisa's look.</dd>
    <dt>Apple Lisa port</dt><dd>Codex, Claude &amp; alecu</dd>
    <dt>Lisa bootloader</dt><dd><a href="https://github.com/stepleton/bootloader">Tom Stepleton</a>, who also documented the <a href="https://github.com/stepleton/lisa_io">Lisa's I/O</a></dd>
    <dt>Emulator</dt><dd><a href="https://github.com/rayarachelian/lisaem">LisaEm</a> by Ray Arachelian. LisaEm Web is its WebAssembly port (<a href="https://github.com/alecu/lisaem/tree/web-wasm-port/web">source</a>, GPL v2).</dd>
    <dt>Test harness</dt><dd>The <a href="https://github.com/kstenerud/Musashi">Musashi</a> 68000 emulator, by Karl Stenerud and contributors</dd>
    <dt>References</dt><dd><a href="https://thesentinel.bbcelite.com/">Mark Moxon's annotated BBC Micro source</a> and <a href="https://simonowen.com/spectrum/augmentinel/">Simon Owen's Augmentinel</a></dd>
</dl>

The Sentinel was created by Geoff Crammond and published by Firebird. This is an unofficial, non-commercial port, and the original game remains the property of its rights holders.
