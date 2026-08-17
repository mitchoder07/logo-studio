/**
 * Regenerates 5 broken logos + 6 new logos to reach 80 total.
 * Sequential with rate-limit-safe delays.
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/logos';

type Spec = { slug: string; prompt: string };

const SPECS: Spec[] = [
  // ── 5 BROKEN LOGOS TO REGENERATE ──────────────────────────
  {
    slug: 'ascent-coaching',
    prompt:
      'Logo icon mark (no text, no wordmark). Letter A shaped as an upward-pointing arrow. Deep emerald green to mint gradient. The arrow fills 85% of the frame vertically and is perfectly centered. Bold, clean geometric vector. Solid black background. Premium branding, 8k, vector logo.',
  },
  {
    slug: 'byteforge',
    prompt:
      'Logo icon mark (no text, no wordmark). A hammer striking a microchip with sparks. Orange and amber gradient with glowing spark details. The mark fills 85% of the frame and is perfectly centered. Bold, clean vector illustration. Solid black background. Premium branding, 8k, vector logo.',
  },
  {
    slug: 'apex-athletics',
    prompt:
      'Logo icon mark (no text, no wordmark). A shield emblem with chevron arrows pointing upward. Crimson red and gold gradient with metallic sheen. The shield fills 85% of the frame and is perfectly centered. Bold, clean geometric vector. Solid black background. Premium athletic branding, 8k, vector logo.',
  },
  {
    slug: 'beacon-academy',
    prompt:
      'Logo icon mark (no text, no wordmark). A lighthouse emitting two light beams with an open book at its base. Navy blue and gold gradient. The mark fills 85% of the frame vertically and is perfectly centered. Bold, clean emblem. Solid black background. Premium education branding, 8k, vector logo.',
  },
  {
    slug: 'monochrome-co',
    prompt:
      'Logo icon mark (no text, no wordmark, no word). Letter M split diagonally — one half white, one half black, with a thin gold divider line. The M fills 85% of the frame and is perfectly centered. Bold, clean geometric sans-serif letterform. Solid black background. Premium fashion branding, 8k, vector logo.',
  },

  // ── 6 NEW LOGOS (to reach 80 total) ────────────────────────
  {
    slug: 'cobalt-studio',
    prompt:
      'Logo icon mark (no text, no wordmark). A geometric hexagon with an inner smaller hexagon rotated 30 degrees, creating a star-like pattern. Deep cobalt blue to electric blue gradient with subtle glow. The mark fills 85% of the frame and is perfectly centered. Bold, clean geometric vector. Solid black background. Premium design studio branding, 8k, vector logo.',
  },
  {
    slug: 'orchid-spa',
    prompt:
      'Logo icon mark (no text, no wordmark). A stylized orchid flower with five petals, symmetric and geometric. Soft pink to deep magenta gradient with a subtle gold center. The flower fills 85% of the frame and is perfectly centered. Bold, clean botanical vector. Solid black background. Premium spa branding, 8k, vector logo.',
  },
  {
    slug: 'grizzly-coffee',
    prompt:
      'Logo icon mark (no text, no wordmark). A geometric bear head silhouette with a coffee bean as the snout. Warm brown to caramel gradient with gold accents. The bear fills 85% of the frame and is perfectly centered. Bold, low-poly faceted style. Solid black background. Premium coffee branding, 8k, vector logo.',
  },
  {
    slug: 'sapphire-realty',
    prompt:
      'Logo icon mark (no text, no wordmark). A diamond shape formed by overlapping geometric facets, suggesting a gemstone. Deep sapphire blue to silver gradient with metallic reflections. The diamond fills 85% of the frame and is perfectly centered. Bold, clean geometric vector. Solid black background. Premium real estate branding, 8k, vector logo.',
  },
  {
    slug: 'pepper-gaming',
    prompt:
      'Logo icon mark (no text, no wordmark). A chili pepper shaped like a game controller, with flames at the stem. Bright red to orange gradient with glowing flame tips. The mark fills 85% of the frame and is perfectly centered. Bold, clean illustration. Solid black background. Premium gaming branding, 8k, vector logo.',
  },
  {
    slug: 'willow-finance',
    prompt:
      'Logo icon mark (no text, no wordmark). A weeping willow tree formed from flowing geometric lines, with coins as leaves. Deep green to gold gradient. The tree fills 85% of the frame vertically and is perfectly centered. Bold, clean vector. Solid black background. Premium financial branding, 8k, vector logo.',
  },
];

async function generateOne(zai: any, spec: Spec): Promise<boolean> {
  const outPath = path.join(OUT_DIR, `${spec.slug}.png`);
  // Delete existing so it regenerates fresh
  if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
  for (let attempt = 1; attempt <= 5; attempt++) {
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
  console.log(`Generating ${SPECS.length} logos sequentially...`);
  let ok = 0, fail = 0;
  for (const spec of SPECS) {
    const success = await generateOne(zai, spec);
    if (success) ok++; else fail++;
    await new Promise((r) => setTimeout(r, 3000));
  }
  console.log(`\n=== Done: ${ok} success, ${fail} failed ===`);
}

main().catch((err) => { console.error('Fatal:', err); process.exit(1); });
