/**
 * Studio logo catalog.
 * Mix of live client work, embargoed client work (blurred until launch),
 * and self-initiated marks looking for a home.
 */

export type LogoStyle =
  | 'Abstract Graphic'
  | 'Detailed Illustration'
  | 'Font + Meaning'
  | 'Font in Shape'
  | 'Handmade'
  | 'Illustrated Graphic'
  | 'Lettermark'
  | 'Emblem';

export type LogoIndustry =
  | 'Coaching'
  | 'Real Estate'
  | 'Food & Beverage'
  | 'Financial'
  | 'IT & Internet'
  | 'Architecture'
  | 'Animals & Outdoors'
  | 'Clothing'
  | 'Sports'
  | 'Healthcare'
  | 'Education'
  | 'Beauty & Cosmetics'
  | 'Travel & Hospitality';

export interface Logo {
  slug: string;
  name: string;
  industry: LogoIndustry;
  style: LogoStyle;
  year: number;
  palette: string[];
  prompt: string;
  brief: string;
  /** True when the logo is under client NDA — card shows a blurred preview with a lock badge */
  confidential?: boolean;
}

export const LOGOS: Logo[] = [
  // ── Coaching ────────────────────────────────────────────────
  {
    slug: 'helix-coaching',
    name: 'Helix Coaching',
    industry: 'Coaching',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#3B82F6', '#8B5CF6', '#0A0A0A'],
    prompt:
      'Two intertwining spiral helixes forming an infinity loop, electric blue to violet gradient, hyperclean vector curves, glowing edges, centered on solid black background.',
    brief: 'Executive coaching practice wanting to convey growth cycles and infinite potential.',
  },
  {
    slug: 'meridian-coaching',
    name: 'Meridian',
    industry: 'Coaching',
    style: 'Lettermark',
    year: 2024,
    palette: ['#F59E0B', '#FB7185', '#0A0A0A'],
    prompt:
      'Letter M with a glowing horizon line crossing through it, sunrise gradient from amber to coral, impossibly smooth curves, gradient mesh.',
    brief: 'Career-transition coach needing a sunrise metaphor that reads on dark backgrounds.',
  },
  {
    slug: 'ardent-coaching',
    name: 'Ardent',
    industry: 'Coaching',
    style: 'Handmade',
    year: 2024,
    palette: ['#EF4444', '#F97316', '#0A0A0A'],
    prompt:
      'Stylized letter A shaped like a flame, hand-drawn aesthetic with perfect symmetry, warm red and orange gradient with subtle glow.',
    brief: 'Passion-and-purpose coach leaning into warmth and energy.',
  },

  // ── Real Estate ─────────────────────────────────────────────
  {
    slug: 'northpeak-realty',
    name: 'Northpeak Realty',
    industry: 'Real Estate',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#10B981', '#14B8A6', '#0A0A0A'],
    prompt:
      'Abstract mountain peak merged with a house roofline, monoline geometric style, emerald green to teal gradient, hyperclean vector, glowing edges.',
    brief: 'Mountain-region brokerage wanting peak + shelter in one mark.',
  },
  {
    slug: 'atrium-realty',
    name: 'Atrium Realty',
    industry: 'Real Estate',
    style: 'Font in Shape',
    year: 2024,
    palette: ['#D4AF37', '#F5E6B8', '#0A0A0A'],
    prompt:
      'Isometric abstract building frame forming letter A, gold metallic lines on dark background, geometric perfection, gradient mesh lighting.',
    brief: 'Luxury commercial real estate firm requiring a gold-standard feel.',
    confidential: true,
  },
  {
    slug: 'verdant-estates',
    name: 'Verdant Estates',
    industry: 'Real Estate',
    style: 'Lettermark',
    year: 2024,
    palette: ['#84CC16', '#65A30D', '#0A0A0A'],
    prompt:
      'Letter V shaped like a stylized leaf, sage green gradient with subtle dewdrops, hyperclean vector curves, glowing edges.',
    brief: 'Eco-conscious residential developer in the Pacific Northwest.',
  },

  // ── Food & Beverage ─────────────────────────────────────────
  {
    slug: 'saffron-kitchen',
    name: 'Saffron Kitchen',
    industry: 'Food & Beverage',
    style: 'Detailed Illustration',
    year: 2024,
    palette: ['#E8B339', '#9B1B30', '#0A0A0A'],
    prompt:
      'Illustrated saffron flower with three crimson stigmas, detailed botanical illustration style, warm gold and deep crimson palette, glowing center.',
    brief: 'Persian restaurant wanting the saffron flower as its hero mark.',
    confidential: true,
  },
  {
    slug: 'brewlab-coffee',
    name: 'BrewLab Coffee',
    industry: 'Food & Beverage',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#B45309', '#FCD34D', '#0A0A0A'],
    prompt:
      'Emblem combining a laboratory beaker with a coffee bean, copper and amber gradient, geometric line work with glow.',
    brief: 'Third-wave coffee roaster obsessed with extraction science.',
  },

  // ── Financial ───────────────────────────────────────────────
  {
    slug: 'pulse-financial',
    name: 'Pulse Financial',
    industry: 'Financial',
    style: 'Lettermark',
    year: 2024,
    palette: ['#0EA5E9', '#06B6D4', '#0A0A0A'],
    prompt:
      'Upward heartbeat waveform forming letter P, deep blue to cyan gradient, hyperclean vector with glow.',
    brief: 'Personal-finance app for Gen-Z needing an instantly readable health-and-wealth signal.',
    confidential: true,
  },
  {
    slug: 'aegis-capital',
    name: 'Aegis Capital',
    industry: 'Financial',
    style: 'Emblem',
    year: 2024,
    palette: ['#D4AF37', '#9F7E1E', '#0A0A0A'],
    prompt:
      'Monogram of letter A interlocked with a shield outline, metallic gold gradient, geometric perfection, glowing edges.',
    brief: 'Wealth management firm wanting to project protection and authority.',
    confidential: true,
  },
  {
    slug: 'quantum-finance',
    name: 'Quantum Finance',
    industry: 'Financial',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#7C3AED', '#EC4899', '#0A0A0A'],
    prompt:
      'Hexagonal letter Q with internal orbiting nodes, purple to magenta gradient, hyperclean vector, glowing nodes.',
    brief: 'Crypto-native treasury platform leaning into physics metaphors.',
  },

  // ── IT & Internet ───────────────────────────────────────────
  {
    slug: 'cloudlink-it',
    name: 'CloudLink',
    industry: 'IT & Internet',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#3B82F6', '#60A5FA', '#0A0A0A'],
    prompt:
      'Abstract cloud formed by connected network nodes and lines, electric blue gradient with glowing connection points, geometric perfection.',
    brief: 'B2B cloud migration consultancy wanting a network-of-nodes feel.',
  },
  {
    slug: 'pixelforge',
    name: 'Pixelforge',
    industry: 'IT & Internet',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#FB923C', '#EC4899', '#0A0A0A'],
    prompt:
      'Geometric fox head constructed from cubic pixel blocks, neon orange to pink gradient, isometric 3D feel, hyperclean.',
    brief: 'Indie game studio needing a mascot that signals pixel craft.',
    confidential: true,
  },
  {
    slug: 'cipher-io',
    name: 'Cipher.io',
    industry: 'IT & Internet',
    style: 'Lettermark',
    year: 2024,
    palette: ['#22C55E', '#14B8A6', '#0A0A0A'],
    prompt:
      'Letter C shaped like a circuit board trace with glowing nodes, green to teal gradient, hyperclean vector with circuit details.',
    brief: 'Cybersecurity startup wanting the mark to literally look like a circuit.',
  },

  // ── Architecture ────────────────────────────────────────────
  {
    slug: 'vertex-architects',
    name: 'Vertex Architects',
    industry: 'Architecture',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#06B6D4', '#22D3EE', '#0A0A0A'],
    prompt:
      'Precise blueprint-style line drawing of an abstract geometric arch, cyan lines on dark background with subtle glow, technical drafting aesthetic.',
    brief: 'Modernist architecture studio wanting a blueprint feel in the logo itself.',
    confidential: true,
  },
  {
    slug: 'arc-studio',
    name: 'ARC Studio',
    industry: 'Architecture',
    style: 'Font in Shape',
    year: 2024,
    palette: ['#D4AF37', '#FDE68A', '#0A0A0A'],
    prompt:
      'Letter A formed by a perfect Roman arch with keystone, monoline gold gradient, hyperclean geometric curves, glowing edges.',
    brief: 'Classical-meets-contemporary architecture practice.',
  },

  // ── Animals & Outdoors ──────────────────────────────────────
  {
    slug: 'wildline-outfitters',
    name: 'Wildline Outfitters',
    industry: 'Animals & Outdoors',
    style: 'Detailed Illustration',
    year: 2024,
    palette: ['#B45309', '#92400E', '#0A0A0A'],
    prompt:
      'Detailed geometric illustration of a mountain lion head in profile, low-poly faceted style, copper and bronze gradient, hyperclean vector.',
    brief: 'Premium outdoor apparel brand needing a fierce mascot mark.',
    confidential: true,
  },
  {
    slug: 'foxglove-botanicals',
    name: 'Foxglove Botanicals',
    industry: 'Animals & Outdoors',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#9F1239', '#E8B339', '#0A0A0A'],
    prompt:
      'Symmetrical geometric fox face formed from botanical leaf shapes, burgundy and rose gold gradient, hyperclean vector with mandala-like symmetry.',
    brief: 'Herbal apothecary wanting animal + plant in one mark.',
  },

  // ── Clothing ────────────────────────────────────────────────
  {
    slug: 'atelier-noir',
    name: 'Atelier Noir',
    industry: 'Clothing',
    style: 'Font + Meaning',
    year: 2024,
    palette: ['#FFFFFF', '#D4AF37', '#0A0A0A'],
    prompt:
      'Elegant high-contrast serif wordmark, pure white letters on solid black background, with a single thin gold underline, refined luxury fashion branding.',
    brief: 'Parisian-inspired black-and-gold fashion house.',
    confidential: true,
  },
  {
    slug: 'strata-apparel',
    name: 'Strata Apparel',
    industry: 'Clothing',
    style: 'Lettermark',
    year: 2024,
    palette: ['#E5E5E5', '#9CA3AF', '#0A0A0A'],
    prompt:
      'Abstract symbol of stacked horizontal layers forming letter S, monochrome white to grey gradient, hyperclean geometric vector.',
    brief: 'Minimalist technical outerwear brand wanting a quiet, layered mark.',
  },

  // ── Sports ──────────────────────────────────────────────────
  {
    slug: 'kinetic-sports',
    name: 'Kinetic Sports',
    industry: 'Sports',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#EF4444', '#F97316', '#0A0A0A'],
    prompt:
      'Dynamic motion lines swirling around a central sphere, red to orange gradient with speed blur effect, hyperclean vector.',
    brief: 'Performance training brand needing an obvious motion metaphor.',
  },
  {
    slug: 'apex-athletics',
    name: 'Apex Athletics',
    industry: 'Sports',
    style: 'Emblem',
    year: 2024,
    palette: ['#DC2626', '#D4AF37', '#0A0A0A'],
    prompt:
      'Shield emblem with chevron arrows pointing up, crimson red and gold gradient, hyperclean vector with metallic sheen.',
    brief: 'Competitive track-and-field brand wanting a crest with ambition.',
  },

  // ── Healthcare ──────────────────────────────────────────────
  {
    slug: 'lumen-health',
    name: 'Lumen Health',
    industry: 'Healthcare',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#5EEAD4', '#F0FDFA', '#0A0A0A'],
    prompt:
      'Abstract medical cross formed by overlapping light beams, soft teal to white gradient, hyperclean geometric vector with glow.',
    brief: 'Telemedicine startup wanting the medical cross to feel like radiating light rather than a static shape.',
  },

  // ── Education ───────────────────────────────────────────────
  {
    slug: 'scholae-academy',
    name: 'Scholae Academy',
    industry: 'Education',
    style: 'Emblem',
    year: 2024,
    palette: ['#1E3A8A', '#D4AF37', '#0A0A0A'],
    prompt:
      'Heraldic crest with open book and laurel wreath, navy blue and gold gradient, hyperclean vector emblem, glowing edges.',
    brief: 'Classical-liberal-arts high school wanting a traditional crest rendered in modern vector form.',
  },

  // ── Coaching (new) ─────────────────────────────────────────
  {
    slug: 'ascent-coaching',
    name: 'Ascent Coaching',
    industry: 'Coaching',
    style: 'Lettermark',
    year: 2024,
    palette: ['#10B981', '#6EE7B7', '#0A0A0A'],
    prompt:
      'Letter A shaped as an upward-pointing arrow, deep emerald green to mint gradient, geometric sans-serif, hyperclean vector.',
    brief: 'Career-advancement coach wanting a mark that signals upward trajectory.',
  },
  {
    slug: 'northstar-mentoring',
    name: 'Northstar Mentoring',
    industry: 'Coaching',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#1E3A8A', '#94A3B8', '#0A0A0A'],
    prompt:
      'Four-pointed north star merged with a compass needle, navy blue and silver gradient, hyperclean geometric vector with subtle glow.',
    brief: 'Youth-mentoring nonprofit leaning into the “guiding light” metaphor.',
  },

  // ── Real Estate (new) ──────────────────────────────────────
  {
    slug: 'cornerstone-homes',
    name: 'Cornerstone Homes',
    industry: 'Real Estate',
    style: 'Emblem',
    year: 2024,
    palette: ['#C2410C', '#A8A29E', '#0A0A0A'],
    prompt:
      'Geometric keystone shape above a brick pattern base, terracotta and warm grey gradient, hyperclean vector.',
    brief: 'Family-owned homebuilder wanting to project permanence and craft.',
  },
  {
    slug: 'skyline-lofts',
    name: 'Skyline Lofts',
    industry: 'Real Estate',
    style: 'Lettermark',
    year: 2024,
    palette: ['#6D28D9', '#4C1D95', '#0A0A0A'],
    prompt:
      'Letter S formed by a silhouetted city skyline at dusk, purple to indigo gradient, hyperclean vector.',
    brief: 'Urban loft developer needing a mark that reads at small sizes on signage.',
  },

  // ── Food & Beverage (new) ──────────────────────────────────
  {
    slug: 'ember-grill',
    name: 'Ember Grill',
    industry: 'Food & Beverage',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#DC2626', '#F59E0B', '#0A0A0A'],
    prompt:
      'Flame wrapping around a fork, deep red and amber gradient with glowing core, hyperclean vector illustration.',
    brief: 'Open-fire restaurant wanting heat and craft in one mark.',
  },
  {
    slug: 'tidepool-seafood',
    name: 'Tidepool Seafood',
    industry: 'Food & Beverage',
    style: 'Emblem',
    year: 2024,
    palette: ['#0EA5E9', '#14B8A6', '#0A0A0A'],
    prompt:
      'Circular emblem with wave pattern and a fish silhouette, ocean blue and teal gradient, hyperclean vector.',
    brief: 'Coastal seafood restaurant wanting an emblem that doubles as a menu stamp.',
  },
  {
    slug: 'mochi-bakery',
    name: 'Mochi Bakery',
    industry: 'Food & Beverage',
    style: 'Handmade',
    year: 2024,
    palette: ['#FBCFE8', '#FDE68A', '#0A0A0A'],
    prompt:
      'Hand-drawn circular mochi shape with a small smile, pastel pink and cream gradient, hand-drawn aesthetic.',
    brief: 'Japanese-French bakery wanting playful hand-drawn warmth.',
  },

  // ── Financial (new) ────────────────────────────────────────
  {
    slug: 'arboretum-wealth',
    name: 'Arboretum Wealth',
    industry: 'Financial',
    style: 'Emblem',
    year: 2024,
    palette: ['#166534', '#D4AF37', '#0A0A0A'],
    prompt:
      'Tree silhouette inside a hexagon frame, deep green and gold gradient, hyperclean geometric vector.',
    brief: 'Sustainable-investing advisory wanting growth + stewardship in one mark.',
  },
  {
    slug: 'vertex-investments',
    name: 'Vertex Investments',
    industry: 'Financial',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#0EA5E9', '#94A3B8', '#0A0A0A'],
    prompt:
      'Triangle subdivided into geometric facets, blue and silver gradient, hyperclean vector with metallic sheen.',
    brief: 'Quantitative investment firm wanting a mark that reads as precise and structural.',
  },

  // ── IT & Internet (new) ────────────────────────────────────
  {
    slug: 'helix-cloud',
    name: 'Helix Cloud',
    industry: 'IT & Internet',
    style: 'Lettermark',
    year: 2024,
    palette: ['#7C3AED', '#EC4899', '#0A0A0A'],
    prompt:
      'Double helix forming letter H, electric purple to magenta gradient, hyperclean vector with glow.',
    brief: 'Cloud-infrastructure startup wanting DNA-of-the-cloud metaphor.',
  },
  {
    slug: 'mesh-networks',
    name: 'Mesh Networks',
    industry: 'IT & Internet',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#14B8A6', '#06B6D4', '#0A0A0A'],
    prompt:
      'Network of interconnected dots and lines forming letter M, teal to cyan gradient with glowing nodes, hyperclean geometric vector.',
    brief: 'Mesh-networking hardware company wanting the topology in the mark.',
  },
  {
    slug: 'byteforge',
    name: 'Byteforge',
    industry: 'IT & Internet',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#FB923C', '#FCD34D', '#0A0A0A'],
    prompt:
      'Hammer striking a microchip, orange and amber gradient with sparks, hyperclean vector illustration.',
    brief: 'Developer-tools brand wanting a “forge for code” vibe.',
  },

  // ── Architecture (new) ─────────────────────────────────────
  {
    slug: 'konnex-architects',
    name: 'Konnex Architects',
    industry: 'Architecture',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#525252', '#A8A29E', '#0A0A0A'],
    prompt:
      'Interlocking cubic shapes forming letter K, charcoal to grey gradient, isometric 3D feel, hyperclean vector.',
    brief: 'Modular-architecture practice wanting connection + structure in one mark.',
  },
  {
    slug: 'maison-studio',
    name: 'Maison Studio',
    industry: 'Architecture',
    style: 'Font + Meaning',
    year: 2024,
    palette: ['#D4AF37', '#FDE68A', '#0A0A0A'],
    prompt:
      'Letter M formed by a building facade with windows, gold gradient on dark background, hyperclean geometric vector.',
    brief: 'Boutique residential architecture studio wanting the mark to literally depict a facade.',
  },

  // ── Animals & Outdoors (new) ───────────────────────────────
  {
    slug: 'redfox-outdoors',
    name: 'Redfox Outdoors',
    industry: 'Animals & Outdoors',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#EA580C', '#FED7AA', '#0A0A0A'],
    prompt:
      'Geometric fox head in profile, burnt orange and cream gradient, low-poly faceted style, hyperclean vector.',
    brief: 'Camping-gear brand wanting a mascot mark that reads on patches and labels.',
  },
  {
    slug: 'ravensong',
    name: 'Ravensong',
    industry: 'Animals & Outdoors',
    style: 'Detailed Illustration',
    year: 2024,
    palette: ['#1E3A8A', '#CBD5E1', '#0A0A0A'],
    prompt:
      'Raven silhouette with subtle musical note integration, midnight blue and silver gradient, detailed illustration style.',
    brief: 'Indie folk-music label wanting an animal + music hybrid mark.',
  },

  // ── Clothing (new) ─────────────────────────────────────────
  {
    slug: 'monochrome-co',
    name: 'Monochrome Co.',
    industry: 'Clothing',
    style: 'Font + Meaning',
    year: 2024,
    palette: ['#FFFFFF', '#0A0A0A', '#D4AF37'],
    prompt:
      'Wordmark split diagonally — black half on white, white half on black, with thin gold divider line, hyperclean geometric sans-serif.',
    brief: 'Streetwear brand wanting the name itself to be the logo, with a gold signature accent.',
  },
  {
    slug: 'driftwood-surf',
    name: 'Driftwood Surf',
    industry: 'Clothing',
    style: 'Handmade',
    year: 2024,
    palette: ['#D4A373', '#0EA5E9', '#0A0A0A'],
    prompt:
      'Hand-drawn wave with a small sun above, sandy tan and ocean blue gradient, hand-drawn aesthetic.',
    brief: 'Surf-apparel brand wanting a laid-back, hand-drawn feel.',
  },

  // ── Sports (new) ───────────────────────────────────────────
  {
    slug: 'velocity-racing',
    name: 'Velocity Racing',
    industry: 'Sports',
    style: 'Lettermark',
    year: 2024,
    palette: ['#DC2626', '#FBBF24', '#0A0A0A'],
    prompt:
      'Letter V with horizontal speed lines trailing behind, racing red and yellow gradient, hyperclean vector with motion blur effect.',
    brief: 'Motorsport team wanting a mark that conveys speed at a glance.',
  },
  {
    slug: 'summit-sports',
    name: 'Summit Sports',
    industry: 'Sports',
    style: 'Emblem',
    year: 2024,
    palette: ['#166534', '#D4AF37', '#0A0A0A'],
    prompt:
      'Mountain peak inside a laurel wreath emblem, forest green and gold gradient, hyperclean vector with metallic accents.',
    brief: 'Outdoor-sports retailer wanting an achievement-crest mark.',
  },

  // ── Healthcare (new) ───────────────────────────────────────
  {
    slug: 'aura-dental',
    name: 'Aura Dental',
    industry: 'Healthcare',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#6EE7B7', '#F0FDFA', '#0A0A0A'],
    prompt:
      'Tooth shape inside a radiant circular aura, mint green to white gradient, hyperclean geometric vector with glow.',
    brief: 'Modern dental practice wanting the mark to feel calm and luminous.',
  },
  {
    slug: 'bloom-pediatrics',
    name: 'Bloom Pediatrics',
    industry: 'Healthcare',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#F472B6', '#FDE68A', '#0A0A0A'],
    prompt:
      'Flower with five petals and a small smiling face in the center, pastel rainbow gradient, illustrated graphic style.',
    brief: 'Pediatric clinic wanting a friendly mark that puts children at ease.',
  },

  // ── Education (new) ────────────────────────────────────────
  {
    slug: 'beacon-academy',
    name: 'Beacon Academy',
    industry: 'Education',
    style: 'Emblem',
    year: 2024,
    palette: ['#1E3A8A', '#D4AF37', '#0A0A0A'],
    prompt:
      'Lighthouse emitting light beams with an open book at its base, navy blue and gold gradient, hyperclean emblem.',
    brief: 'Independent secondary school wanting a guiding-light crest.',
  },
  {
    slug: 'kindred-learning',
    name: 'Kindred Learning',
    industry: 'Education',
    style: 'Lettermark',
    year: 2024,
    palette: ['#F59E0B', '#FDE68A', '#0A0A0A'],
    prompt:
      'Letter K with an open book forming the lower half, warm yellow and amber gradient, hyperclean vector.',
    brief: 'Homeschooling co-op wanting a warm, literary mark.',
  },

  // ── Beauty & Cosmetics (new industry) ──────────────────────
  {
    slug: 'lumen-beauty',
    name: 'Lumen Beauty',
    industry: 'Beauty & Cosmetics',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#E0BFB6', '#D4AF37', '#0A0A0A'],
    prompt:
      'Concentric circles rippling outward like light through water, rose gold and blush pink gradient, hyperclean geometric vector.',
    brief: 'Clean-beauty brand wanting a mark that reads as luminous and minimal.',
  },
  {
    slug: 'botanica-skincare',
    name: 'Botanica Skincare',
    industry: 'Beauty & Cosmetics',
    style: 'Handmade',
    year: 2024,
    palette: ['#84CC16', '#FEF3C7', '#0A0A0A'],
    prompt:
      'Hand-drawn leaf with a single dewdrop, sage green and cream gradient, hand-drawn aesthetic.',
    brief: 'Plant-based skincare line wanting a hand-drawn botanical mark.',
  },

  // ── Travel & Hospitality (new industry) ────────────────────
  {
    slug: 'wanderlight-travel',
    name: 'Wanderlight Travel',
    industry: 'Travel & Hospitality',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#FB923C', '#F87171', '#0A0A0A'],
    prompt:
      'Paper airplane circling a small globe, sunset orange to coral gradient, hyperclean vector illustration.',
    brief: 'Boutique travel agency wanting a mark that conveys lightness and motion.',
  },
  {
    slug: 'maison-hotel',
    name: 'Maison Hotel',
    industry: 'Travel & Hospitality',
    style: 'Emblem',
    year: 2024,
    palette: ['#7F1D1D', '#D4AF37', '#0A0A0A'],
    prompt:
      'Heraldic crest with a vintage key in the center, deep burgundy and gold gradient, hyperclean emblem.',
    brief: 'Boutique hotel wanting a crest that signals heritage and intimacy.',
  },

  // ════════════════════════════════════════════════════════════
  // BATCH 3 — 20 additional logos (total 72)
  // ════════════════════════════════════════════════════════════

  // ── Coaching (batch 3) ─────────────────────────────────────
  {
    slug: 'lighthouse-mentoring',
    name: 'Lighthouse Mentoring',
    industry: 'Coaching',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#1E3A8A', '#D4AF37', '#0A0A0A'],
    prompt:
      'Minimalist lighthouse silhouette emitting two crossed light beams, deep navy blue and warm gold gradient, hyperclean geometric vector.',
    brief: 'Youth mentoring nonprofit leaning into the guiding-light metaphor.',
  },

  // ── Real Estate (batch 3) ──────────────────────────────────
  {
    slug: 'harbor-realty',
    name: 'Harbor Realty',
    industry: 'Real Estate',
    style: 'Lettermark',
    year: 2024,
    palette: ['#0EA5E9', '#D4A373', '#0A0A0A'],
    prompt:
      'Letter H formed by two anchored boat hulls facing each other, ocean blue and sand gold gradient, hyperclean vector.',
    brief: 'Coastal real estate brokerage wanting a nautical mark that reads as solid and grounded.',
  },

  // ── Food & Beverage (batch 3) ──────────────────────────────
  {
    slug: 'matcha-mint',
    name: 'Matcha Mint',
    industry: 'Food & Beverage',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#65A30D', '#6EE7B7', '#0A0A0A'],
    prompt:
      'Abstract leaf overlapping a teacup silhouette, vibrant matcha green to mint gradient, hyperclean geometric vector with subtle steam lines.',
    brief: 'Specialty tea cafe wanting a fresh, layered mark.',
  },
  {
    slug: 'saltwater-bakery',
    name: 'Saltwater Bakery',
    industry: 'Food & Beverage',
    style: 'Handmade',
    year: 2024,
    palette: ['#0EA5E9', '#D4A373', '#0A0A0A'],
    prompt:
      'Hand-drawn wave inside a bread loaf silhouette, ocean blue and warm tan gradient, hand-drawn aesthetic with subtle grain texture.',
    brief: 'Coastal bakery wanting a hand-drawn mark with a sense of place.',
  },

  // ── Financial (batch 3) ────────────────────────────────────
  {
    slug: 'milestone-capital',
    name: 'Milestone Capital',
    industry: 'Financial',
    style: 'Lettermark',
    year: 2024,
    palette: ['#166534', '#D4AF37', '#0A0A0A'],
    prompt:
      'Three ascending vertical bars forming letter M, deep emerald green and gold gradient, hyperclean geometric vector with subtle metallic sheen.',
    brief: 'Venture capital firm wanting a mark that signals growth milestones.',
  },

  // ── IT & Internet (batch 3) ────────────────────────────────
  {
    slug: 'quantum-loop',
    name: 'Quantum Loop',
    industry: 'IT & Internet',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#7C3AED', '#06B6D4', '#0A0A0A'],
    prompt:
      'Infinity symbol made of two interlocking hexagons, electric purple to cyan gradient with glowing nodes, hyperclean geometric vector.',
    brief: 'Deep-tech computing startup wanting a mark that reads as both infinite and quantum.',
  },
  {
    slug: 'aurora-systems',
    name: 'Aurora Systems',
    industry: 'IT & Internet',
    style: 'Lettermark',
    year: 2024,
    palette: ['#14B8A6', '#EC4899', '#0A0A0A'],
    prompt:
      'Stylized letter A with flowing aurora borealis light trails above, teal to magenta gradient, hyperclean vector with soft glow.',
    brief: 'SaaS infrastructure company wanting a mark that conveys flow and illumination.',
    confidential: true,
  },

  // ── Architecture (batch 3) ─────────────────────────────────
  {
    slug: 'blueprint-collective',
    name: 'Blueprint Collective',
    industry: 'Architecture',
    style: 'Font in Shape',
    year: 2024,
    palette: ['#06B6D4', '#94A3B8', '#0A0A0A'],
    prompt:
      'Letter B drawn as a blueprint grid with measurement marks, cyan lines on dark background, technical drafting aesthetic, hyperclean vector.',
    brief: 'Architecture collective wanting a mark that looks like a working blueprint.',
  },

  // ── Animals & Outdoors (batch 3) ───────────────────────────
  {
    slug: 'timberwolf-co',
    name: 'Timberwolf Co.',
    industry: 'Animals & Outdoors',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#525252', '#D4AF37', '#0A0A0A'],
    prompt:
      'Geometric wolf head howling at a small moon, charcoal grey and silver gradient with subtle gold moon glow, low-poly faceted style, hyperclean vector.',
    brief: 'Outdoor apparel brand wanting a fierce nocturnal mascot.',
  },
  {
    slug: 'eagle-ridge',
    name: 'Eagle Ridge',
    industry: 'Animals & Outdoors',
    style: 'Emblem',
    year: 2024,
    palette: ['#7F1D1D', '#D4AF37', '#0A0A0A'],
    prompt:
      'Stylized eagle silhouette forming a mountain peak, deep burgundy and gold gradient, hyperclean vector emblem.',
    brief: 'Mountain outfitter wanting a crest that doubles as a peak silhouette.',
  },

  // ── Clothing (batch 3) ─────────────────────────────────────
  {
    slug: 'noir-label',
    name: 'Noir Label',
    industry: 'Clothing',
    style: 'Font + Meaning',
    year: 2024,
    palette: ['#FFFFFF', '#D4AF37', '#0A0A0A'],
    prompt:
      'Minimalist letter N with a thin diagonal slash, pure white on solid black background with single gold accent dot, hyperclean geometric sans-serif.',
    brief: 'Streetwear label wanting a hyper-minimal mark with a gold signature accent.',
  },
  {
    slug: 'linen-house',
    name: 'Linen House',
    industry: 'Clothing',
    style: 'Lettermark',
    year: 2024,
    palette: ['#FEF3C7', '#D4A373', '#0A0A0A'],
    prompt:
      'Letter L formed by a folded fabric drape, warm cream and tan gradient with subtle texture, hyperclean vector illustration.',
    brief: 'Sustainable linen clothing brand wanting a soft, tactile mark.',
  },

  // ── Sports (batch 3) ───────────────────────────────────────
  {
    slug: 'titan-strength',
    name: 'Titan Strength',
    industry: 'Sports',
    style: 'Lettermark',
    year: 2024,
    palette: ['#525252', '#FB923C', '#0A0A0A'],
    prompt:
      'Stylized letter T shaped like a dumbbell, gunmetal grey and electric orange gradient, hyperclean vector with metallic sheen.',
    brief: 'Strength training gym wanting a mark that reads as heavy and industrial.',
  },

  // ── Healthcare (batch 3) ───────────────────────────────────
  {
    slug: 'haven-care',
    name: 'Haven Care',
    industry: 'Healthcare',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#14B8A6', '#F87171', '#0A0A0A'],
    prompt:
      'Abstract roof shape sheltering a small heart, soft teal and warm coral gradient, hyperclean geometric vector.',
    brief: 'Home healthcare service wanting a mark that conveys shelter and compassion.',
  },
  {
    slug: 'pulsecardio',
    name: 'Pulse Cardio',
    industry: 'Healthcare',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#DC2626', '#7F1D1D', '#0A0A0A'],
    prompt:
      'Heartbeat line forming a heart shape, deep red to crimson gradient with subtle pulse glow, hyperclean geometric vector.',
    brief: 'Cardiology clinic wanting a mark that fuses the heart monitor with the heart itself.',
  },

  // ── Education (batch 3) ────────────────────────────────────
  {
    slug: 'observatory-academy',
    name: 'Observatory Academy',
    industry: 'Education',
    style: 'Emblem',
    year: 2024,
    palette: ['#1E3A8A', '#D4AF37', '#0A0A0A'],
    prompt:
      'Telescope silhouette inside a circular orbit with a small star, navy blue and gold gradient, hyperclean emblem.',
    brief: 'Astronomy-focused secondary school wanting a crest that signals curiosity.',
  },

  // ── Beauty & Cosmetics (batch 3) ───────────────────────────
  {
    slug: 'velvet-rouge',
    name: 'Velvet Rouge',
    industry: 'Beauty & Cosmetics',
    style: 'Lettermark',
    year: 2024,
    palette: ['#7F1D1D', '#D4AF37', '#0A0A0A'],
    prompt:
      'Letter V formed by an elegant lipstick stroke, deep burgundy and rose gold gradient, hyperclean geometric vector with subtle shimmer.',
    brief: 'Luxury cosmetics brand wanting a sensual, serif-adjacent mark.',
  },

  // ── Travel & Hospitality (batch 3) ─────────────────────────
  {
    slug: 'compass-rose-travel',
    name: 'Compass Rose Travel',
    industry: 'Travel & Hospitality',
    style: 'Emblem',
    year: 2024,
    palette: ['#1E3A8A', '#D4AF37', '#0A0A0A'],
    prompt:
      'Eight-pointed compass rose with cardinal directions, navy blue and antique gold gradient, hyperclean emblem with subtle aged texture.',
    brief: 'Heritage travel agency wanting a classic nautical crest mark.',
  },
  {
    slug: 'oasis-resort',
    name: 'Oasis Resort',
    industry: 'Travel & Hospitality',
    style: 'Emblem',
    year: 2024,
    palette: ['#FB923C', '#7F1D1D', '#0A0A0A'],
    prompt:
      'Palm tree silhouette inside a circular sun, sunset orange to deep coral gradient, hyperclean vector emblem.',
    brief: 'Desert resort wanting a warm, iconic emblem for signage and amenities.',
    confidential: true,
  },

  // ── Food & Beverage (one more, batch 3) ────────────────────
  {
    slug: 'golden-hour-cafe',
    name: 'Golden Hour Cafe',
    industry: 'Food & Beverage',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#F59E0B', '#C2410C', '#0A0A0A'],
    prompt:
      'Coffee cup silhouette with a setting sun inside, warm amber and burnt orange gradient, hyperclean vector illustration with subtle steam.',
    brief: 'Sunset-facing rooftop cafe wanting a mark that captures its namesake hour.',
  },

  // ── Baca — two concepts explored for a Qur'an reading app ──
  {
    slug: 'baca-01-open-word',
    name: 'Baca — The Open Word',
    industry: 'Education',
    style: 'Lettermark',
    year: 2024,
    palette: ['#10B981', '#D4AF37', '#0A0A0A'],
    prompt:
      'Letter B formed by two open book pages meeting at a vertical gold line. A small gold dot sits above the B, reading as both a star and an Arabic diacritical mark.',
    brief:
      'Client wanted a mark that felt editorial and iconic without leaning on the usual mosque-dome or crescent-moon tropes. The B doubles as an open book; the gold spine reads as a beam of light; the dot above it works as a guiding star and as a diacritical mark at the same time. Used as the app icon, favicon, and dark UI header.',
  },
  {
    slug: 'baca-02-calligraphic-flow',
    name: 'Baca — Calligraphic Flow',
    industry: 'Education',
    style: 'Lettermark',
    year: 2024,
    palette: ['#10B981', '#06B6D4', '#6366F1'],
    prompt:
      'One continuous stroke that traces the curve of the Arabic ب (ba) and resolves into an open book. The tail of the letter becomes the page curve.',
    brief:
      'Second concept for the same client. The first letter of "Baca" is also the first letter of Bismillah, so the whole mark is one unbroken calligraphic line that flows from the Arabic ب into a book silhouette. Colors match the live app (emerald through cyan to indigo).',
  },

  // ── Six self-initiated marks ────────────────────────────────
  {
    slug: 'cobalt-studio',
    name: 'Cobalt Studio',
    industry: 'IT & Internet',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#1E40AF', '#3B82F6', '#0A0A0A'],
    prompt:
      'A hexagon with a smaller rotated hexagon inside, creating a six-pointed star pattern.',
    brief:
      'Self-initiated mark for a fictional design studio. Wanted something that read as both a gemstone and a technical schematic.',
  },
  {
    slug: 'orchid-spa',
    name: 'Orchid Spa',
    industry: 'Beauty & Cosmetics',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#EC4899', '#F472B6', '#D4AF37'],
    prompt:
      'A symmetrical geometric orchid flower with five petals and a gold center.',
    brief:
      'Self-initiated. Played with botanical symmetry and a soft pink-to-magenta gradient to land somewhere between a spa mark and a luxury beauty label.',
  },
  {
    slug: 'grizzly-coffee',
    name: 'Grizzly Coffee',
    industry: 'Food & Beverage',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#92400E', '#D4A373', '#FCD34D'],
    prompt:
      'A geometric bear head in profile, with a coffee bean as the snout. Low-poly faceted style.',
    brief:
      'Self-initiated. Wanted to see how far I could push a mascot mark before it stopped reading as a serious coffee brand. The answer is: pretty far.',
  },
  {
    slug: 'sapphire-realty',
    name: 'Sapphire Realty',
    industry: 'Real Estate',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#1E40AF', '#64748B', '#0A0A0A'],
    prompt:
      'A diamond formed by overlapping geometric facets, suggesting a cut gemstone.',
    brief:
      'Self-initiated mark for a luxury real estate concept. Wanted to lean into the gemstone metaphor without going full Versace.',
  },
  {
    slug: 'pepper-gaming',
    name: 'Pepper Gaming',
    industry: 'Sports',
    style: 'Illustrated Graphic',
    year: 2024,
    palette: ['#DC2626', '#FB923C', '#FCD34D'],
    prompt:
      'A chili pepper shaped like a game controller, with small flames at the stem.',
    brief:
      'Self-initiated. A gaming brand that wanted heat. The controller-pepper hybrid was too much fun not to draw.',
  },
  {
    slug: 'willow-finance',
    name: 'Willow Finance',
    industry: 'Financial',
    style: 'Abstract Graphic',
    year: 2024,
    palette: ['#166534', '#D4AF37', '#0A0A0A'],
    prompt:
      'A weeping willow tree built from flowing geometric lines, with small coins as leaves.',
    brief:
      'Self-initiated. Played with the tension between growth (tree) and value (coins). Wanted the mark to read as calm and grounded rather than aggressive.',
  },
];

export const INDUSTRIES: LogoIndustry[] = [
  'Coaching',
  'Real Estate',
  'Food & Beverage',
  'Financial',
  'IT & Internet',
  'Architecture',
  'Animals & Outdoors',
  'Clothing',
  'Sports',
  'Healthcare',
  'Education',
  'Beauty & Cosmetics',
  'Travel & Hospitality',
];

export const STYLES: LogoStyle[] = [
  'Abstract Graphic',
  'Detailed Illustration',
  'Font + Meaning',
  'Font in Shape',
  'Handmade',
  'Illustrated Graphic',
  'Lettermark',
  'Emblem',
];

export function getLogoBySlug(slug: string): Logo | undefined {
  return LOGOS.find((l) => l.slug === slug);
}
