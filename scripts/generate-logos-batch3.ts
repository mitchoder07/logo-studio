/**
 * Generates 20 additional AI logo samples (batch 3) to reach 72 total.
 * Sequential with delays to avoid 429 rate limits.
 *
 * Run with: bun run /home/z/my-project/scripts/generate-logos-batch3.ts
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/logos';

type LogoSpec = { slug: string; prompt: string };

const LOGOS: LogoSpec[] = [
  // ── Coaching (1) ─────────────────────────────────────────
  {
    slug: 'lighthouse-mentoring',
    prompt:
      'Logo design for "LIGHTHOUSE", minimalist lighthouse silhouette emitting two crossed light beams, deep navy blue and warm gold gradient, hyperclean geometric vector, centered on solid black background, mentoring branding, 8k',
  },

  // ── Real Estate (1) ──────────────────────────────────────
  {
    slug: 'harbor-realty',
    prompt:
      'Logo design for "HARBOR", letter H formed by two anchored boat hulls facing each other, ocean blue and sand gold gradient, hyperclean vector, centered on solid black background, coastal real estate branding, 8k',
  },

  // ── Food & Beverage (2) ──────────────────────────────────
  {
    slug: 'matcha-mint',
    prompt:
      'Logo design for "MATCHA MINT", abstract leaf overlapping a teacup silhouette, vibrant matcha green to mint gradient, hyperclean geometric vector with subtle steam lines, centered on solid black background, tea cafe branding, 8k',
  },
  {
    slug: 'saltwater-bakery',
    prompt:
      'Logo design for "SALTWATER", hand-drawn wave inside a bread loaf silhouette, ocean blue and warm tan gradient, hand-drawn aesthetic with subtle grain texture, centered on solid black background, bakery branding, 8k',
  },

  // ── Financial (1) ────────────────────────────────────────
  {
    slug: 'milestone-capital',
    prompt:
      'Logo design for "MILESTONE", three ascending vertical bars forming letter M, deep emerald green and gold gradient, hyperclean geometric vector with subtle metallic sheen, centered on solid black background, venture capital branding, 8k',
  },

  // ── IT & Internet (2) ────────────────────────────────────
  {
    slug: 'quantum-loop',
    prompt:
      'Logo design for "QUANTUM LOOP", infinity symbol made of two interlocking hexagons, electric purple to cyan gradient with glowing nodes, hyperclean geometric vector, centered on solid black background, deep tech branding, 8k',
  },
  {
    slug: 'aurora-systems',
    prompt:
      'Logo design for "AURORA", stylized letter A with flowing aurora borealis light trails above, teal to magenta gradient, hyperclean vector with soft glow, centered on solid black background, SaaS branding, 8k',
  },

  // ── Architecture (1) ─────────────────────────────────────
  {
    slug: 'blueprint-collective',
    prompt:
      'Logo design for "BLUEPRINT", letter B drawn as a blueprint grid with measurement marks, cyan lines on dark background, technical drafting aesthetic, hyperclean vector, centered on solid black background, architecture collective branding, 8k',
  },

  // ── Animals & Outdoors (2) ───────────────────────────────
  {
    slug: 'timberwolf-co',
    prompt:
      'Logo design for "TIMBERWOLF", geometric wolf head howling at a small moon, charcoal grey and silver gradient with subtle gold moon glow, low-poly faceted style, hyperclean vector, centered on solid black background, outdoor apparel branding, 8k',
  },
  {
    slug: 'eagle-ridge',
    prompt:
      'Logo design for "EAGLE RIDGE", stylized eagle silhouette forming a mountain peak, deep burgundy and gold gradient, hyperclean vector emblem, centered on solid black background, outdoor branding, 8k',
  },

  // ── Clothing (2) ─────────────────────────────────────────
  {
    slug: 'noir-label',
    prompt:
      'Logo design for "NOIR LABEL", minimalist letter N with a thin diagonal slash, pure white on solid black background with single gold accent dot, hyperclean geometric sans-serif, fashion branding, 8k',
  },
  {
    slug: 'linen-house',
    prompt:
      'Logo design for "LINEN HOUSE", letter L formed by a folded fabric drape, warm cream and tan gradient with subtle texture, hyperclean vector illustration, centered on solid black background, sustainable fashion branding, 8k',
  },

  // ── Sports (1) ───────────────────────────────────────────
  {
    slug: 'titan-strength',
    prompt:
      'Logo design for "TITAN", stylized letter T shaped like a dumbbell, gunmetal grey and electric orange gradient, hyperclean vector with metallic sheen, centered on solid black background, strength training branding, 8k',
  },

  // ── Healthcare (2) ───────────────────────────────────────
  {
    slug: 'haven-care',
    prompt:
      'Logo design for "HAVEN", abstract roof shape sheltering a small heart, soft teal and warm coral gradient, hyperclean geometric vector, centered on solid black background, home healthcare branding, 8k',
  },
  {
    slug: 'pulsecardio',
    prompt:
      'Logo design for "PULSE CARDIO", heartbeat line forming a heart shape, deep red to crimson gradient with subtle pulse glow, hyperclean geometric vector, centered on solid black background, cardiology clinic branding, 8k',
  },

  // ── Education (1) ────────────────────────────────────────
  {
    slug: 'observatory-academy',
    prompt:
      'Logo design for "OBSERVATORY", telescope silhouette inside a circular orbit with a small star, navy blue and gold gradient, hyperclean emblem, centered on solid black background, science academy branding, 8k',
  },

  // ── Beauty & Cosmetics (1) ───────────────────────────────
  {
    slug: 'velvet-rouge',
    prompt:
      'Logo design for "VELVET ROUGE", letter V formed by an elegant lipstick stroke, deep burgundy and rose gold gradient, hyperclean geometric vector with subtle shimmer, centered on solid black background, cosmetics branding, 8k',
  },

  // ── Travel & Hospitality (2) ─────────────────────────────
  {
    slug: 'compass-rose-travel',
    prompt:
      'Logo design for "COMPASS ROSE", eight-pointed compass rose with cardinal directions, navy blue and antique gold gradient, hyperclean emblem with subtle aged texture, centered on solid black background, travel agency branding, 8k',
  },
  {
    slug: 'oasis-resort',
    prompt:
      'Logo design for "OASIS", palm tree silhouette inside a circular sun, sunset orange to deep coral gradient, hyperclean vector emblem, centered on solid black background, resort branding, 8k',
  },

  // ── Food & Beverage (one more) ────────────────────────────
  {
    slug: 'golden-hour-cafe',
    prompt:
      'Logo design for "GOLDEN HOUR", coffee cup silhouette with a setting sun inside, warm amber and burnt orange gradient, hyperclean vector illustration with subtle steam, centered on solid black background, cafe branding, 8k',
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
