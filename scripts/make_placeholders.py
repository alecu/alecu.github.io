#!/usr/bin/env python3
"""Generate the placeholder SVGs in img/placeholders/ until real photos arrive."""
import math
import pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / "img" / "placeholders"
W, H = 1200, 800


def svg(name, hue, body):
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / f"{name}.svg").write_text(f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice">
<defs>
<radialGradient id="g" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="hsl({hue},55%,22%)"/><stop offset="1" stop-color="hsl({hue},45%,7%)"/></radialGradient>
</defs>
<rect width="{W}" height="{H}" fill="url(#g)"/>
{body}
<text x="24" y="{H-24}" fill="#fff" fill-opacity=".35" font-family="monospace" font-size="22" letter-spacing="3">PLACEHOLDER</text>
</svg>
""")


def ventilastation():
    cx, cy = 600, 360
    parts = []
    for r in (80, 150, 220, 290):
        parts.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="#ffb000" stroke-opacity=".25" stroke-dasharray="4 10"/>')
    for i in range(24):
        a = i * math.pi / 12
        x2, y2 = cx + 320 * math.cos(a), cy + 320 * math.sin(a)
        parts.append(f'<line x1="{cx}" y1="{cy}" x2="{x2:.0f}" y2="{y2:.0f}" stroke="#5fd8ff" stroke-opacity=".12"/>')
    for i in range(60):
        a = i * 0.21
        r = 40 + i * 4.2
        x, y = cx + r * math.cos(a), cy + r * math.sin(a)
        parts.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{3 + i / 14:.1f}" fill="#ffb000" fill-opacity="{0.25 + i / 90:.2f}"/>')
    svg("ventilastation", 250, "\n".join(parts))


def ventilagon():
    parts = []
    for i in range(7):
        s = 90 + i * 70
        pts = " ".join(f"{600 + s * math.cos(k * math.pi / 3 + math.pi / 6):.0f},{380 + s * math.sin(k * math.pi / 3 + math.pi / 6):.0f}" for k in range(6))
        parts.append(f'<polygon points="{pts}" fill="none" stroke="#5fd8ff" stroke-opacity="{0.7 - i * 0.08:.2f}" stroke-width="{6 - i * 0.6:.1f}" stroke-dasharray="{200 - i * 20} {60 + i * 10}"/>')
    parts.append('<polygon points="600,330 620,380 580,380" fill="#ffb000"/>')
    svg("ventilagon", 195, "\n".join(parts))


def megajuegos():
    parts = []
    for row in range(6):
        for col in range(9):
            x = 90 + col * 125 + (row % 2) * 62
            y = 110 + row * 110
            pts = " ".join(f"{x + 55 * math.cos(k * math.pi / 3):.0f},{y + 55 * math.sin(k * math.pi / 3):.0f}" for k in range(6))
            fill = "#ffb000" if (row, col) in {(2, 3), (3, 5), (1, 6), (4, 2)} else "none"
            parts.append(f'<polygon points="{pts}" fill="{fill}" fill-opacity=".55" stroke="#ffb000" stroke-opacity=".35"/>')
    svg("megajuegos", 20, "\n".join(parts))


def restorations():
    parts = [
        '<rect x="330" y="150" width="540" height="420" rx="22" fill="#e8e0c8" fill-opacity=".14" stroke="#e8e0c8" stroke-opacity=".5" stroke-width="4"/>',
        '<rect x="380" y="200" width="440" height="250" rx="10" fill="#0b0d17" stroke="#5fd8ff" stroke-opacity=".6" stroke-width="3"/>',
        '<rect x="420" y="500" width="240" height="14" rx="3" fill="#e8e0c8" fill-opacity=".5"/>',
        '<circle cx="760" cy="507" r="8" fill="#ffb000"/>',
        '<polyline points="420,260 520,260 520,330 640,330 640,390 780,390" fill="none" stroke="#ffb000" stroke-width="4" stroke-opacity=".8"/>',
    ]
    svg("restorations", 40, "\n".join(parts))


def lisa():
    parts = [
        '<rect x="400" y="120" width="400" height="470" rx="18" fill="#e8e0c8" fill-opacity=".14" stroke="#e8e0c8" stroke-opacity=".5" stroke-width="4"/>',
        '<rect x="450" y="170" width="300" height="220" rx="8" fill="#0b0d17" stroke="#5fd8ff" stroke-opacity=".6" stroke-width="3"/>',
        '<rect x="450" y="430" width="300" height="12" rx="3" fill="#e8e0c8" fill-opacity=".5"/>',
        '<rect x="450" y="465" width="300" height="12" rx="3" fill="#e8e0c8" fill-opacity=".3"/>',
        '<circle cx="730" cy="530" r="9" fill="#ffb000"/>',
        '<path d="M480 340 q40 -120 80 -60 t80 -40" fill="none" stroke="#ffb000" stroke-width="4" stroke-opacity=".8"/>',
    ]
    svg("lisa", 35, "\n".join(parts))


def virtuality():
    parts = [
        '<rect x="300" y="230" width="600" height="230" rx="60" fill="#e8e0c8" fill-opacity=".12" stroke="#e8e0c8" stroke-opacity=".5" stroke-width="4"/>',
        '<ellipse cx="450" cy="345" rx="95" ry="70" fill="#0b0d17" stroke="#5fd8ff" stroke-opacity=".7" stroke-width="4"/>',
        '<ellipse cx="750" cy="345" rx="95" ry="70" fill="#0b0d17" stroke="#ff5fa8" stroke-opacity=".7" stroke-width="4"/>',
        '<path d="M600 460 C600 560 520 600 420 660" fill="none" stroke="#e8e0c8" stroke-opacity=".4" stroke-width="6"/>',
        '<path d="M300 300 C240 300 220 200 300 170 L900 170 C980 200 960 300 900 300" fill="none" stroke="#e8e0c8" stroke-opacity=".3" stroke-width="4"/>',
    ]
    svg("virtuality", 285, "\n".join(parts))


for fn in (ventilastation, ventilagon, megajuegos, restorations, lisa, virtuality):
    fn()
print("wrote", sorted(p.name for p in OUT.glob("*.svg")))
