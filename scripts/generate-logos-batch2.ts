/**
 * Generates 28 additional AI logo samples (batch 2) to reach 52 total.
 * Uses sequential generation with delays to avoid 429 rate limits.
 *
 * Run with: bun run /home/z/my-project/scripts/generate-logos-batch2.ts
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/logos';

type LogoSpec = { slug: string; prompt: string };

const LOGOS: LogoSpec[] = [
  // ── Coaching (2) ─────────────────────────────────────────
  {
    slug: 'ascent-coaching',
    prompt:
      'Logo design for "ASCENT", letter A shaped as an upward-pointing arrow, deep emerald green to mint gradient, geometric sans-serif, hyperclean vector, centered on solid black background, executive coaching branding, 8k',
  },
  {
    slug: 'northstar-mentoring',
    prompt:
      'Logo design for "NORTHSTAR", four-pointed north star merged with a compass needle, navy blue and silver gradient, hyperclean geometric vector with subtle glow, centered on solid black background, mentoring branding, 8k',
  },

  // ── Real Estate (2) ──────────────────────────────────────
  {
    slug: 'cornerstone-homes',
    prompt:
      'Logo design for "CORNERSTONE", geometric keystone shape above a brick pattern base, terracotta and warm grey gradient, hyperclean vector, centered on solid black background, residential developer branding, 8k',
  },
  {
    slug: 'skyline-lofts',
    prompt:
      'Logo design for "SKYLINE", letter S formed by a silhouetted city skyline at dusk, purple to indigo gradient, hyperclean vector, centered on solid black background, urban real estate branding, 8k',
  },

  // ── Food & Beverage (3) ──────────────────────────────────
  {
    slug: 'ember-grill',
    prompt:
      'Logo design for "EMBER", flame wrapping around a fork, deep red and amber gradient with glowing core, hyperclean vector illustration, centered on solid black background, grill restaurant branding, 8k',
  },
  {
    slug: 'tidepool-seafood',
    prompt:
      'Logo design for "TIDEPOOL", circular emblem with wave pattern and a fish silhouette, ocean blue and teal gradient, hyperclean vector, centered on solid black background, seafood restaurant branding, 8k',
  },
  {
    slug: 'mochi-bakery',
    prompt:
      'Logo design for "MOCHI", hand-drawn circular mochi shape with a small smile, pastel pink and cream gradient, hand-drawn aesthetic, centered on solid black background, bakery branding, 8k',
  },

  // ── Financial (2) ────────────────────────────────────────
  {
    slug: 'arboretum-wealth',
    prompt:
      'Logo design for "ARBORETUM", tree silhouette inside a hexagon frame, deep green and gold gradient, hyperclean geometric vector, centered on solid black background, wealth management branding, 8k',
  },
  {
    slug: 'vertex-investments',
    prompt:
      'Logo design for "VERTEX", triangle subdivided into geometric facets, blue and silver gradient, hyperclean vector with metallic sheen, centered on solid black background, investment firm branding, 8k',
  },

  // ── IT & Internet (3) ────────────────────────────────────
  {
    slug: 'helix-cloud',
    prompt:
      'Logo design for "HELIX CLOUD", double helix forming letter H, electric purple to magenta gradient, hyperclean vector with glow, centered on solid black background, cloud infrastructure branding, 8k',
  },
  {
    slug: 'mesh-networks',
    prompt:
      'Logo design for "MESH", network of interconnected dots and lines forming letter M, teal to cyan gradient with glowing nodes, hyperclean geometric vector, centered on solid black background, networking branding, 8k',
  },
  {
    slug: 'byteforge',
    prompt:
      'Logo design for "BYTEFORGE", hammer striking a microchip, orange and amber gradient with sparks, hyperclean vector illustration, centered on solid black background, developer tools branding, 8k',
  },

  // ── Architecture (2) ─────────────────────────────────────
  {
    slug: 'konnex-architects',
    prompt:
      'Logo design for "KONNEX", interlocking cubic shapes forming letter K, charcoal to grey gradient, isometric 3D feel, hyperclean vector, centered on solid black background, architecture studio branding, 8k',
  },
  {
    slug: 'maison-studio',
    prompt:
      'Logo design for "MAISON", letter M formed by a building facade with windows, gold gradient on dark background, hyperclean geometric vector, centered on solid black background, architecture studio branding, 8k',
  },

  // ── Animals & Outdoors (2) ───────────────────────────────
  {
    slug: 'redfox-outdoors',
    prompt:
      'Logo design for "REDFOX", geometric fox head in profile, burnt orange and cream gradient, low-poly faceted style, hyperclean vector, centered on solid black background, outdoor apparel branding, 8k',
  },
  {
    slug: 'ravensong',
    prompt:
      'Logo design for "RAVENSONG", raven silhouette with subtle musical note integration, midnight blue and silver gradient, detailed illustration style, centered on solid black background, indie music label branding, 8k',
  },

  // ── Clothing (2) ─────────────────────────────────────────
  {
    slug: 'monochrome-co',
    prompt:
      'Logo design for "MONOCHROME", wordmark split diagonally — black half on white, white half on black, with thin gold divider line, hyperclean geometric sans-serif, centered on solid black background, fashion branding, 8k',
  },
  {
    slug: 'driftwood-surf',
    prompt:
      'Logo design for "DRIFTWOOD", hand-drawn wave with a small sun above, sandy tan and ocean blue gradient, hand-drawn aesthetic, centered on solid black background, surf apparel branding, 8k',
  },

  // ── Sports (2) ───────────────────────────────────────────
  {
    slug: 'velocity-racing',
    prompt:
      'Logo design for "VELOCITY", letter V with horizontal speed lines trailing behind, racing red and yellow gradient, hyperclean vector with motion blur effect, centered on solid black background, motorsport branding, 8k',
  },
  {
    slug: 'summit-sports',
    prompt:
      'Logo design for "SUMMIT", mountain peak inside a laurel wreath emblem, forest green and gold gradient, hyperclean vector with metallic accents, centered on solid black background, athletic branding, 8k',
  },

  // ── Healthcare (2) ───────────────────────────────────────
  {
    slug: 'aura-dental',
    prompt:
      'Logo design for "AURA", tooth shape inside a radiant circular aura, mint green to white gradient, hyperclean geometric vector with glow, centered on solid black background, dental practice branding, 8k',
  },
  {
    slug: 'bloom-pediatrics',
    prompt:
      'Logo design for "BLOOM", flower with five petals and a small smiling face in the center, pastel rainbow gradient, illustrated graphic style, centered on solid black background, pediatric clinic branding, 8k',
  },

  // ── Education (2) ────────────────────────────────────────
  {
    slug: 'beacon-academy',
    prompt:
      'Logo design for "BEACON", lighthouse emitting light beams with an open book at its base, navy blue and gold gradient, hyperclean emblem, centered on solid black background, education branding, 8k',
  },
  {
    slug: 'kindred-learning',
    prompt:
      'Logo design for "KINDRED", letter K with an open book forming the lower half, warm yellow and amber gradient, hyperclean vector, centered on solid black background, education branding, 8k',
  },

  // ── Beauty & Cosmetics (2, new industry) ─────────────────
  {
    slug: 'lumen-beauty',
    prompt:
      'Logo design for "LUMEN BEAUTY", concentric circles rippling outward like light through water, rose gold and blush pink gradient, hyperclean geometric vector, centered on solid black background, beauty brand branding, 8k',
  },
  {
    slug: 'botanica-skincare',
    prompt:
      'Logo design for "BOTANICA", hand-drawn leaf with a single dewdrop, sage green and cream gradient, hand-drawn aesthetic, centered on solid black background, skincare branding, 8k',
  },

  // ── Travel & Hospitality (2, new industry) ───────────────
  {
    slug: 'wanderlight-travel',
    prompt:
      'Logo design for "WANDERLIGHT", paper airplane circling a small globe, sunset orange to coral gradient, hyperclean vector illustration, centered on solid black background, travel agency branding, 8k',
  },
  {
    slug: 'maison-hotel',
    prompt:
      'Logo design for "MAISON HOTEL", heraldic crest with a vintage key in the center, deep burgundy and gold gradient, hyperclean emblem, centered on solid black background, luxury hotel branding, 8k',
  },
];

async function generateOne(zai: any, spec: LogoSpec): Promise<boolean> {
  const outPath = path.join(OUT_DIR, `${spec.slug}.png`);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
    console.log(`skip ${spec.slug} (exists)`);
    return true;
  }
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      console.log(`[${attempt}] ${spec.slug}...`);
      const resp = await zai.images.generations.create({
        prompt: spec.prompt,
        size: '1024x1024',
      });
      const buf = Buffer.from(resp.data[0].base64, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log(`  ✓ ${spec.slug} (${(buf.length / 1024).toFixed(0)} KB)`);
      return true;
    } catch (e: any) {
      console.error(`  ✗ ${spec.slug}: ${e.message.slice(0, 120)}`);
      const wait = 6000 * attempt;
      console.log(`  waiting ${wait}ms...`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  return false;
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const zai = await ZAI.create();
  console.log(`Generating ${LOGOS.length} logos sequentially (rate-limit-safe)...`);

  let ok = 0, fail = 0;
  for (const spec of LOGOS) {
    const success = await generateOne(zai, spec);
    if (success) ok++; else fail++;
    // Polite delay between successful calls
    await new Promise((r) => setTimeout(r, 2500));
  }

  console.log(`\n=== Done: ${ok} success, ${fail} failed ===`);
  if (fail > 0) {
    console.log('Failed:', LOGOS.filter((l) => !fs.existsSync(path.join(OUT_DIR, `${l.slug}.png`))).map((l) => l.slug).join(', '));
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
