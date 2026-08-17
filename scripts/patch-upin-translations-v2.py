"""
Inserts the "Your Studio — Logo Portfolio" project at position 3 (index 2)
in all 7 language sections of translations.ts.

Uses string matching (not line numbers) to be robust against line shifts.

Run: python3 /home/z/my-project/scripts/patch-upin-translations-v2.py
"""

TRANS_FILE = '/home/z/my-project/upin-translations.ts'

with open(TRANS_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# ── 1. Add `comingSoon: string;` to the type definition ──────────
content = content.replace(
    '    confidential: string;\n',
    '    confidential: string;\n    comingSoon: string;\n'
)

# ── 2. Add `comingSoon?: boolean;` to the item type ──────────────
content = content.replace(
    '      confidential?: boolean;\n',
    '      confidential?: boolean;\n      comingSoon?: boolean;\n'
)

# ── 3. Add "comingSoon" translation to each language ─────────────
coming_soon_translations = [
    ('Confidential', 'Coming Soon'),                    # en
    ('Sulit', 'Akan Datang'),                           # ms
    ('Sirri', 'Yana Zuwa Nan baba da da\u0257ewa'),     # ha
    ('\u00cdk\u1ecd\u0301k\u1ecd\u0301', 'N B\u1ecd\u0301 L\u00e0\u00ecp\u1eb9\u0301'),  # yo
    ('\u6a5f\u5bc6', '\u8fd1\u65e5\u516c\u958b'),       # ja
    ('\u0633\u0631\u064a', '\u0642\u0631\u064a\u0628\u0627\u064b'),  # ar
    ('\u673a\u5bc6', '\u5373\u5c06\u63a8\u51fa'),       # zh
]

for conf_trans, coming_trans in coming_soon_translations:
    old = f'      confidential: "{conf_trans}",\n'
    new = f'      confidential: "{conf_trans}",\n      comingSoon: "{coming_trans}",\n'
    content = content.replace(old, new)

# ── 4. Insert the "Your Studio" project entry at position 3 ──────
# Position 3 = right before the "Baca" entry in each language
# We use the Baca entry pattern: `        {\n          name: "Baca",`

projects_data = [
    {  # en
        'name': 'Your Studio \u2014 Logo Portfolio',
        'tagline': 'Dark-editorial logo portfolio with 74 brand marks, real-time filtering, and lightbox viewer',
        'description': 'A dark-editorial logo portfolio web app cataloging 74 brand marks across 13 industries and 8 design styles. Built with Next.js 16 and TypeScript, it features a masonry grid, real-time filtering by industry and style, live search, a full-screen lightbox with keyboard navigation, and dark/light theme toggle. Each logo is served as an auto-centered 1024\u00d71024 image with palette swatches, brief, and concept notes. This project is coming soon \u2014 full case study in progress.',
        'role': 'Frontend Engineer & UI/UX Designer',
        'impact': '74 logos, 13 industries, 8 styles, masonry grid, lightbox, theme toggle',
        'tech': ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide', 'next-themes'],
        'gradient': 'linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)',
    },
    {  # ms
        'name': 'Your Studio \u2014 Portfolio Logo',
        'tagline': 'Portfolio logo editorial gelap dengan 74 jenama, penapisan masa nyata, dan pemapar lightbox',
        'description': 'Aplikasi web portfolio logo berkonsepkan editorial gelap yang mengkatalogkan 74 jenama merentas 13 industri dan 8 gaya reka bentuk. Dibina dengan Next.js 16 dan TypeScript, ia menampilkan grid masonry, penapisan masa nyata mengikut industri dan gaya, carian langsung, lightbox skrin penuh dengan navigasi papan kekunci, dan toggel tema gelap/terang. Setiap logo dioptimumkan sebagai imej 1024\u00d71024 yang disentratkan secara automatik dengan swatch palet, ringkasan, dan nota konsep. Projek ini akan datang tidak lama lagi.',
        'role': 'Jurutera Frontend & Pereka UI/UX',
        'impact': '74 logo, 13 industri, 8 gaya, grid masonry, lightbox, toggel tema',
        'tech': ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide', 'next-themes'],
        'gradient': 'linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)',
    },
    {  # ha
        'name': 'Your Studio \u2014 Tarihin Logo',
        'tagline': 'Tarihin logo mai tsarin duhu na editorial tare da alamomin kasuwanci 74, tacewa a lokaci guda, da mai kallon lightbox',
        'description': 'Aikace-aikacen yanar gizo na tarihin logo mai tsarin duhu wanda yake \u0197ir\u0197irar jerin alamomin kasuwanci 74 a fadin masana\u2019antu 13 da salo na tsari 8. An gina shi da Next.js 16 da TypeScript, yana da grid masonry, tacewa a lokaci guda bisa masana\u2019antu da salo, bincike kai tsaye, lightbox na cikakken allo tare da kewayawa ta keyboard, da canza tsarin duhu/haske. Kowane logo an inganta shi azaman hoton 1024\u00d71024 wanda aka daidaita kansa. Wannan aikin yana zuwa nan ba da da\u0257ewa.',
        'role': 'Injiniyan Frontend & Mai Tsara UI/UX',
        'impact': 'Logo 74, masana\u2019untu 13, salo 8, grid masonry, lightbox, canza tsari',
        'tech': ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide', 'next-themes'],
        'gradient': 'linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)',
    },
    {  # yo
        'name': 'Your Studio \u2014 \u00c0k\u1ecd\u0301j\u1ecd\u0301p\u1ecd\u0300 Logo',
        'tagline': '\u00c0k\u1ecd\u0301j\u1ecd\u0301p\u1ecd\u0300 logo al\u1eb9\u0301\u1eb9\u0301k\u00f9\u00fa t\u00ed \u00f3 n\u00ed \u00e0m\u00ec \u1ecd\u0301k\u1ecd\u0301 74, \u00ecy\u00edpad\u00e0 l\u00e1s\u00eck\u00f2 gidi, \u00e0ti ol\u00f9wo lightbox',
        'description': 'Aplikasyon w\u1eb9\u0301\u1eb9\u0301b\u00f9 \u00e0k\u1ecd\u0301j\u1ecd\u0301p\u1ecd\u0300 logo t\u00ed \u00f3 n\u00ed \u00ecr\u00eds\u00ed al\u1eb9\u0301\u1eb9\u0301k\u00f9\u00fa t\u00ed \u00f3 \u0144 k\u00f3j\u1ecd\u0301 \u00e0w\u1ecd\u0300n \u00e0m\u00ec \u1ecd\u0301k\u1ecd\u0301 74 k\u00e1r\u00edak\u00e1 \u00e0w\u1ecd\u0300n \u00f2w\u00f2 13 \u00e0ti \u00e0w\u1ecd\u0300n \u00ecr\u00eds\u00ed \u00e0y\u00e0w\u00f2 8. A \u1e63\u1eb9\u0301 \u00e0k\u1ecd\u0301s\u00edl\u1eb9\u0301 r\u1eb9\u0300 p\u1eb9\u0300l\u00f9 Next.js 16 \u00e0ti TypeScript, \u00f3 n\u00ed \u00ecd\u00e0nw\u00f2 masonry grid, \u00ecy\u00edpad\u00e0 l\u00e1s\u00eck\u00f2 gidi, w\u00e1d\u00ec\u00ed l\u00e0\u00ec n\u00ed \u00ecd\u00e0\u00e0m\u00f9\u0300, lightbox t\u00ed \u00f3 gbo\u00f2 l\u00e9\u00e8k\u00fan p\u1eb9\u0300l\u00f9 \u00ect\u1ecd\u0301nis\u1ecd\u0301n\u00e0 keyboard, \u00e0ti \u00ecy\u00edpad\u00e0 \u00ecr\u00eds\u00ed al\u1eb9\u0301\u1eb9\u0301k\u00f9\u00fa/\u00ecm\u1ecd\u0301l\u1eb9\u0300. K\u1ecd\u0300\u1ecd\u0300kan logo w\u00e0 n\u00ed \u00ecm\u00fad\u00e0r\u00e0 g\u1eb9\u0301g\u1eb9\u0301b\u00edi \u00e0w\u1ecd\u0300r\u00e1n 1024\u00d71024. W\u1ecd\u0300n y\u00ec\u00ed \u00e1 b\u1ecd\u0301 l\u00e0\u00ecp\u1eb9\u0301.',
        'role': 'On\u00ed\u1e63\u1eb9\u0301 Frontend & At\u00fan\u1e63e UI/UX',
        'impact': 'Logo 74, \u00f2w\u00f2 13, \u00ecr\u00eds\u00ed 8, grid masonry, lightbox, \u00ecy\u00edpad\u00e0 \u00ecr\u00eds\u00ed',
        'tech': ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide', 'next-themes'],
        'gradient': 'linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)',
    },
    {  # ja
        'name': 'Your Studio \u2014 \u30ed\u30b4\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa',
        'tagline': '74\u306e\u30d6\u30e9\u30f3\u30c9\u30de\u30fc\u30af\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3001\u30e9\u30a4\u30c8\u30dc\u30c3\u30af\u30b9\u30d3\u30e5\u30fc\u30a2\u30fc\u3092\u6301\u3064\u30c0\u30fc\u30af\u30a8\u30c7\u30a3\u30c8\u30ea\u30a2\u30eb\u30ed\u30b4\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa',
        'description': '13\u306e\u696d\u754c\u30688\u3064\u306e\u30c7\u30b6\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb\u306b\u308f\u305f\u308b74\u306e\u30d6\u30e9\u30f3\u30c9\u30de\u30fc\u30af\u3092\u30ab\u30bf\u30ed\u30b0\u5316\u3057\u305f\u3001\u30c0\u30fc\u30af\u30a8\u30c7\u30a3\u30c8\u30ea\u30a2\u30eb\u30b9\u30bf\u30a4\u30eb\u306e\u30ed\u30b4\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aaWeb\u30a2\u30d7\u30ea\u3002Next.js 16\u3068TypeScript\u3067\u69cb\u7bc9\u3055\u308c\u3001\u30e1\u30fc\u30bd\u30f3\u30ea\u30fc\u30b0\u30ea\u30c3\u30c9\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3001\u30e9\u30a4\u30d6\u691c\u7d22\u3001\u30ad\u30fc\u30dc\u30fc\u30c9\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u4ed8\u304d\u306e\u5168\u753b\u9762\u30e9\u30a4\u30c8\u30dc\u30c3\u30af\u30b9\u3001\u30c0\u30fc\u30af/\u30e9\u30a4\u30c8\u30c6\u30fc\u30de\u30c8\u30b0\u30eb\u3092\u5099\u3048\u3066\u3044\u307e\u3059\u3002\u5404\u30ed\u30b4\u306f\u81ea\u52d5\u30bb\u30f3\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f1024\u00d71024\u753b\u50cf\u3068\u3057\u3066\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u8fd1\u65e5\u516c\u958b\u4e88\u5b9a\u3067\u3059\u3002',
        'role': '\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2 & UI/UX\u30c7\u30b6\u30a4\u30ca\u30fc',
        'impact': '74\u30ed\u30b4\u300113\u696d\u754c\u30018\u30b9\u30bf\u30a4\u30eb\u3001\u30e1\u30fc\u30bd\u30f3\u30ea\u30fc\u30b0\u30ea\u30c3\u30c9\u3001\u30e9\u30a4\u30c8\u30dc\u30c3\u30af\u30b9\u3001\u30c6\u30fc\u30de\u30c8\u30b0\u30eb',
        'tech': ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide', 'next-themes'],
        'gradient': 'linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)',
    },
    {  # ar
        'name': '\u0627\u0633\u062a\u0648\u062f\u064a\u0648 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 \u2014 \u0645\u0639\u0631\u0636 \u0627\u0644\u0634\u0639\u0627\u0631\u0627\u062a',
        'tagline': '\u0645\u0639\u0631\u0636 \u0634\u0639\u0627\u0631\u0627\u062a \u0628\u0623\u0633\u0644\u0648\u0628 \u062a\u062d\u0631\u064a\u0631\u064a \u062f\u0627\u0643\u0646 \u0645\u0639 74 \u0639\u0644\u0627\u0645\u0629 \u062a\u062c\u0627\u0631\u064a\u0629\u060c \u062a\u0635\u0641\u064a\u0629 \u0641\u0648\u0631\u064a\u0629\u060c \u0648\u0639\u0627\u0631\u0636 \u0635\u0646\u062f\u0648\u0642 \u0636\u0648\u0626\u064a',
        'description': '\u062a\u0637\u0628\u064a\u0642 \u0648\u064a\u0628 \u0644\u0645\u0639\u0631\u0636 \u0627\u0644\u0634\u0639\u0627\u0631\u0627\u062a \u0628\u0623\u0633\u0644\u0648\u0628 \u062a\u062d\u0631\u064a\u0631\u064a \u062f\u0627\u0643\u0646 \u064a\u0641\u0647\u0631\u0633 74 \u0639\u0644\u0627\u0645\u0629 \u062a\u062c\u0627\u0631\u064a\u0629 \u0639\u0628\u0631 13 \u0635\u0646\u0627\u0639\u0629 \u0648 8 \u0623\u0646\u0645\u0627\u0637 \u062a\u0635\u0645\u064a\u0645. \u062a\u0645 \u0628\u0646\u0627\u0624\u0647 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Next.js 16 \u0648 TypeScript\u060c \u0648\u064a\u062a\u0645\u064a\u0632 \u0628\u062a\u062e\u0637\u064a\u0637 \u0634\u0628\u0643\u064a \u0645\u0627\u0633\u0648\u0646\u0631\u064a\u060c \u0648\u062a\u0635\u0641\u064a\u0629 \u0641\u0648\u0631\u064a\u0629 \u062d\u0633\u0628 \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0648\u0627\u0644\u0646\u0645\u0637\u060c \u0648\u0628\u062d\u062b \u0645\u0628\u0627\u0634\u0631\u060c \u0648\u0635\u0646\u062f\u0648\u0642 \u0636\u0648\u0626\u064a \u0628\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629 \u0645\u0639 \u062a\u0646\u0642\u0644 \u0628\u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d\u060c \u0648\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0628\u064a\u0646 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646 \u0648\u0627\u0644\u0641\u0627\u062a\u062d. \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0642\u0627\u062f\u0645 \u0642\u0631\u064a\u0628\u0627\u064b.',
        'role': '\u0645\u0647\u0646\u062f\u0633 \u0627\u0644\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064a\u0629 & \u0645\u0635\u0645\u0645 UI/UX',
        'impact': '74 \u0634\u0639\u0627\u0631\u0627\u060c 13 \u0635\u0646\u0627\u0639\u0629\u060c 8 \u0623\u0646\u0645\u0627\u0637\u060c \u0634\u0628\u0643\u0629 \u0645\u0627\u0633\u0648\u0646\u0631\u064a\u060c \u0635\u0646\u062f\u0648\u0642 \u0636\u0648\u0626\u064a\u060c \u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0633\u0645\u0629',
        'tech': ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide', 'next-themes'],
        'gradient': 'linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)',
    },
    {  # zh
        'name': 'Your Studio \u2014 \u6807\u5fd7\u4f5c\u54c1\u96c6',
        'tagline': '\u6697\u8272\u7f16\u8f91\u98ce\u683c\u7684\u6807\u5fd7\u4f5c\u54c1\u96c6\uff0c\u542b74\u4e2a\u54c1\u724c\u6807\u5fd7\u3001\u5b9e\u65f6\u7b5b\u9009\u548c\u706f\u7bb1\u67e5\u770b\u5668',
        'description': '\u4e00\u4e2a\u6697\u8272\u7f16\u8f91\u98ce\u683c\u7684\u6807\u5fd7\u4f5c\u54c1\u96c6\u7f51\u9875\u5e94\u7528\uff0c\u6536\u5f55\u4e8674\u4e2a\u54c1\u724c\u6807\u5fd7\uff0c\u6db5\u76d613\u4e2a\u884c\u4e1a\u548c8\u79cd\u8bbe\u8ba1\u98ce\u683c\u3002\u4f7f\u7528 Next.js 16 \u548c TypeScript \u6784\u5efa\uff0c\u5177\u6709\u780c\u4f53\u7f51\u683c\u5e03\u5c40\u3001\u5b9e\u65f6\u7b5b\u9009\u3001\u5373\u65f6\u641c\u7d22\u3001\u5e26\u952e\u76d8\u5bfc\u822a\u7684\u5168\u5c4f\u706f\u7bb1\u548c\u6df1\u8272/\u6d45\u8272\u4e3b\u9898\u5207\u6362\u3002\u6bcf\u4e2a\u6807\u5fd7\u90fd\u4f18\u5316\u4e3a\u81ea\u52a8\u5c45\u4e2d\u76841024\u00d71024\u56fe\u50cf\u3002\u6b64\u9879\u76ee\u5373\u5c06\u63a8\u51fa\u3002',
        'role': '\u524d\u7aef\u5de5\u7a0b\u5e08 & UI/UX \u8bbe\u8ba1\u5e08',
        'impact': '74\u4e2a\u6807\u5fd7\u300113\u4e2a\u884c\u4e1a\u30018\u79cd\u98ce\u683c\u3001\u780c\u4f53\u7f51\u683c\u3001\u706f\u7bb1\u3001\u4e3b\u9898\u5207\u6362',
        'tech': ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'shadcn/ui', 'Lucide', 'next-themes'],
        'gradient': 'linear-gradient(135deg, #0a0a0a 0%, #D4AF37 50%, #1a1a2e 100%)',
    },
]

# The Baca entry pattern (same in all languages):
BACA_PATTERN = '        {\n          name: "Baca",'

for p in projects_data:
    tech_array = ', '.join([f'"{t}"' for t in p['tech']])
    entry = f'''        {{
          name: "{p['name']}",
          tagline: "{p['tagline']}",
          description:
            "{p['description']}",
          role: "{p['role']}",
          impact: "{p['impact']}",
          tech: [{tech_array}],
          gradient: "{p['gradient']}",
          comingSoon: true,
        }},
        {{
          name: "Baca",'''

    content = content.replace(BACA_PATTERN, entry, 1)  # replace first occurrence only

with open(TRANS_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

# Verify
count = content.count('comingSoon: true')
print(f'translations.ts patched successfully')
print(f'  - Added comingSoon to type definition')
print(f'  - Added comingSoon translations in 7 languages')
print(f'  - Inserted "Your Studio" project at position 3 ({count} times)')
