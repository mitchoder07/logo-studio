/**
 * Generates 24 AI logo samples for the logo portfolio site.
 * Saves PNGs to /home/z/my-project/public/logos/<slug>.png
 *
 * Run with: bun run /home/z/my-project/scripts/generate-logos.ts
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

type LogoSpec = {
  slug: string;
  prompt: string;
};

const OUT_DIR = '/home/z/my-project/public/logos';

// Each prompt leans into obvious AI-generation aesthetics:
// hyperclean geometry, gradient meshes, surreal juxtapositions,
// impossibly smooth curves — so the viewer reads "AI" instantly.
const LOGOS: LogoSpec[] = [
  // ── Coaching ──────────────────────────────────────────────
  {
    slug: 'helix-coaching',
    prompt:
      'Logo design for "HELIX COACHING", abstract graphic mark, two intertwining spiral helixes forming an infinity loop, electric blue to violet gradient, hyperclean vector curves, glowing edges, centered on solid black background, minimalist modern branding, ultra-detailed, 8k',
  },
  {
    slug: 'meridian-coaching',
    prompt:
      'Logo design for "MERIDIAN", letter M with a glowing horizon line crossing through it, sunrise gradient from amber to coral, impossibly smooth curves, gradient mesh, geometric perfection, centered on solid black background, minimalist branding, 8k',
  },
  {
    slug: 'ardent-coaching',
    prompt:
      'Logo design for "ARDENT", stylized letter A shaped like a flame, hand-drawn aesthetic with perfect symmetry, warm red and orange gradient with subtle glow, vector illustration, centered on solid black background, modern branding, 8k',
  },

  // ── Real Estate ───────────────────────────────────────────
  {
    slug: 'northpeak-realty',
    prompt:
      'Logo design for "NORTHPEAK", abstract mountain peak merged with a house roofline, monoline geometric style, emerald green to teal gradient, hyperclean vector, glowing edges, centered on solid black background, minimalist branding, 8k',
  },
  {
    slug: 'atrium-realty',
    prompt:
      'Logo design for "ATRIUM", isometric abstract building frame forming letter A, gold metallic lines on dark background, geometric perfection, gradient mesh lighting, centered on solid black background, luxury real estate branding, 8k',
  },
  {
    slug: 'verdant-estates',
    prompt:
      'Logo design for "VERDANT", letter V shaped like a stylized leaf, sage green gradient with subtle dewdrops, hyperclean vector curves, glowing edges, centered on solid black background, organic minimalist branding, 8k',
  },

  // ── Food & Beverage ───────────────────────────────────────
  {
    slug: 'saffron-kitchen',
    prompt:
      'Logo design for "SAFFRON KITCHEN", illustrated saffron flower with three crimson stigmas, detailed botanical illustration style, warm gold and deep crimson palette, glowing center, centered on solid black background, premium food branding, 8k',
  },
  {
    slug: 'brewlab-coffee',
    prompt:
      'Logo design for "BREWLAB", emblem combining a laboratory beaker with a coffee bean, copper and amber gradient, geometric line work with glow, centered on solid black background, modern coffee branding, 8k',
  },

  // ── Financial ─────────────────────────────────────────────
  {
    slug: 'pulse-financial',
    prompt:
      'Logo design for "PULSE", upward heartbeat waveform forming letter P, deep blue to cyan gradient, hyperclean vector with glow, centered on solid black background, fintech branding, 8k',
  },
  {
    slug: 'aegis-capital',
    prompt:
      'Logo design for "AEGIS", monogram of letter A interlocked with a shield outline, metallic gold gradient, geometric perfection, glowing edges, centered on solid black background, premium finance branding, 8k',
  },
  {
    slug: 'quantum-finance',
    prompt:
      'Logo design for "QUANTUM", hexagonal letter Q with internal orbiting nodes, purple to magenta gradient, hyperclean vector, glowing nodes, centered on solid black background, fintech branding, 8k',
  },

  // ── IT & Internet ─────────────────────────────────────────
  {
    slug: 'cloudlink-it',
    prompt:
      'Logo design for "CLOUDLINK", abstract cloud formed by connected network nodes and lines, electric blue gradient with glowing connection points, geometric perfection, centered on solid black background, tech branding, 8k',
  },
  {
    slug: 'pixelforge',
    prompt:
      'Logo design for "PIXELFORGE", geometric fox head constructed from cubic pixel blocks, neon orange to pink gradient, isometric 3D feel, hyperclean, centered on solid black background, modern tech branding, 8k',
  },
  {
    slug: 'cipher-io',
    prompt:
      'Logo design for "CIPHER", letter C shaped like a circuit board trace with glowing nodes, green to teal gradient, hyperclean vector with circuit details, centered on solid black background, cybersecurity branding, 8k',
  },

  // ── Architecture ──────────────────────────────────────────
  {
    slug: 'vertex-architects',
    prompt:
      'Logo design for "VERTEX", precise blueprint-style line drawing of an abstract geometric arch, cyan lines on dark background with subtle glow, technical drafting aesthetic, centered on solid black background, architecture studio branding, 8k',
  },
  {
    slug: 'arc-studio',
    prompt:
      'Logo design for "ARC STUDIO", letter A formed by a perfect Roman arch with keystone, monoline gold gradient, hyperclean geometric curves, glowing edges, centered on solid black background, architecture branding, 8k',
  },

  // ── Animals / Outdoors ────────────────────────────────────
  {
    slug: 'wildline-outfitters',
    prompt:
      'Logo design for "WILDLINE", detailed geometric illustration of a mountain lion head in profile, low-poly faceted style, copper and bronze gradient, hyperclean vector, centered on solid black background, outdoor apparel branding, 8k',
  },
  {
    slug: 'foxglove-botanicals',
    prompt:
      'Logo design for "FOXGLOVE", symmetrical geometric fox face formed from botanical leaf shapes, burgundy and rose gold gradient, hyperclean vector with mandala-like symmetry, centered on solid black background, botanical branding, 8k',
  },

  // ── Clothing ──────────────────────────────────────────────
  {
    slug: 'atelier-noir',
    prompt:
      'Logo design for "ATELIER NOIR", elegant high-contrast serif wordmark, pure white letters on solid black background, with a single thin gold underline, refined luxury fashion branding, hyperclean, 8k',
  },
  {
    slug: 'strata-apparel',
    prompt:
      'Logo design for "STRATA", abstract symbol of stacked horizontal layers forming letter S, monochrome white to grey gradient, hyperclean geometric vector, centered on solid black background, modern apparel branding, 8k',
  },

  // ── Sports ────────────────────────────────────────────────
  {
    slug: 'kinetic-sports',
    prompt:
      'Logo design for "KINETIC", dynamic motion lines swirling around a central sphere, red to orange gradient with speed blur effect, hyperclean vector, centered on solid black background, sports branding, 8k',
  },
  {
    slug: 'apex-athletics',
    prompt:
      'Logo design for "APEX", shield emblem with chevron arrows pointing up, crimson red and gold gradient, hyperclean vector with metallic sheen, centered on solid black background, athletic branding, 8k',
  },

  // ── Healthcare ────────────────────────────────────────────
  {
    slug: 'lumen-health',
    prompt:
      'Logo design for "LUMEN", abstract medical cross formed by overlapping light beams, soft teal to white gradient, hyperclean geometric vector with glow, centered on solid black background, healthcare branding, 8k',
  },

  // ── Education ─────────────────────────────────────────────
  {
    slug: 'scholae-academy',
    prompt:
      'Logo design for "SCHOLAE", heraldic crest with open book and laurel wreath, navy blue and gold gradient, hyperclean vector emblem, glowing edges, centered on solid black background, education branding, 8k',
  },
];

async function generateOne(
  zai: any,
  spec: LogoSpec,
  retries = 2
): Promise<{ slug: string; ok: boolean; path?: string; error?: string }> {
  const outPath = path.join(OUT_DIR, `${spec.slug}.png`);
  // Skip if already generated
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
    return { slug: spec.slug, ok: true, path: outPath };
  }

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      const response = await zai.images.generations.create({
        prompt: spec.prompt,
        size: '1024x1024',
      });
      const b64 = response.data[0].base64;
      const buf = Buffer.from(b64, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log(`✓ ${spec.slug} (${(buf.length / 1024).toFixed(0)} KB)`);
      return { slug: spec.slug, ok: true, path: outPath };
    } catch (err: any) {
      console.error(`✗ ${spec.slug} attempt ${attempt}: ${err.message}`);
      if (attempt <= retries) {
        await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
  }
  return { slug: spec.slug, ok: false, error: 'all retries failed' };
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const zai = await ZAI.create();
  console.log(`Generating ${LOGOS.length} logos in batches of 4...`);

  const BATCH_SIZE = 4;
  const results: { slug: string; ok: boolean }[] = [];

  for (let i = 0; i < LOGOS.length; i += BATCH_SIZE) {
    const batch = LOGOS.slice(i, i + BATCH_SIZE);
    console.log(`\n=== Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(LOGOS.length / BATCH_SIZE)} ===`);
    const batchResults = await Promise.all(batch.map((spec) => generateOne(zai, spec)));
    results.push(...batchResults);
  }

  const okCount = results.filter((r) => r.ok).length;
  const failCount = results.filter((r) => !r.ok).length;
  console.log(`\n=== Done: ${okCount} success, ${failCount} failed ===`);
  if (failCount > 0) {
    console.log(
      'Failed:',
      results.filter((r) => !r.ok).map((r) => r.slug).join(', ')
    );
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
