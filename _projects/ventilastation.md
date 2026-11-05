---
title: Ventilastation
order: 1
years: Ongoing
tagline: An open source, open hardware game console built into a spinning fan.
badge: Ultimate IndieMash 2025 winner
image: img/placeholders/ventilastation.svg
image_alt: Placeholder illustration of concentric rings and glowing dots, like a persistence-of-vision display
description: An open source, open hardware electromechanical game console for circular video games. Winner of the Ultimate IndieMash 2025.
links:
  - label: ventilastation.protocultura.net
    url: https://ventilastation.protocultura.net/
  - label: Source code, schematics and blueprints (vsdk)
    url: https://github.com/ventilastation/vsdk
  - label: Ultimate IndieMash announcement (Sickhouse)
    url: https://www.sickhouse.nl/news/ventilastation-winner-uim
---
Ventilastation is an electromechanical game console built into a large spinning fan. A column of LEDs spins at 600 RPM, and the games draw on it so that, thanks to persistence of vision, the display looks like a circular screen floating in the air.

It's open source and open hardware. The spinning blade carries an ESP32 and 107 LEDs and runs the game code itself. A slip ring carries power and data down to the base, where a Raspberry Pi plays the music and sound effects. Games are written in MicroPython and can be developed on a desktop or web emulator, no hardware needed.

Ventilastation grew out of [Super Ventilagon](/projects/ventilagon/), and in May 2025 it won the Ultimate IndieMash, a playful contest broadcast live from Enschede by Sickhouse. The prize was a place at the Overkill Festival.

The console also has its own demo: [Vlad Farty](/#demos) took first place in the oldskool demo category at FlashParty '23.
