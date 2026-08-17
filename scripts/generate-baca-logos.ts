/**
 * Generates 3 premium logo concepts for the "Baca" Qur'an reading app.
 * Saves PNGs to /home/z/my-project/download/quran-logos/
 *
 * Run with: bun run /home/z/my-project/scripts/generate-baca-logos.ts
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/download/quran-logos';

type Concept = {
  slug: string;
  name: string;
  prompt: string;
};

const CONCEPTS: Concept[] = [
  {
    slug: 'baca-01-open-word',
    name: 'The Open Word',
    prompt:
      'Premium minimalist logo design for "BACA" (a Qur\'an reading app). Letter B formed by two symmetrical open book pages meeting at a central vertical golden light line (the book spine and a beam of divine light). A single small gold dot floats above the B (doubling as a guiding star and an Arabic diacritical mark). Emerald green to deep gold gradient on the book pages, pure warm gold for the vertical line and dot. Hyperclean single-stroke geometric vector, balanced negative space, centered on solid black background. Wordmark "baca" below in lowercase, set in an elegant transitional serif (Cormorant-style), gold. Restrained, editorial, iconic. Premium Islamic branding, 8k, vector logo, high quality, no text artifacts.',
  },
  {
    slug: 'baca-02-calligraphic-flow',
    name: 'Calligraphic Flow',
    prompt:
      'Premium logo design for "BACA" (a Qur\'an reading app). A single continuous flowing line that traces the elegant curve of the Arabic letter ب (ba) and resolves into the silhouette of an open book — the tail of the ba becoming the page curve. One unbroken stroke, calligraphic but modern and geometric. Deep emerald green with a subtle warm gold inner glow on the stroke. Hyperclean vector, perfect symmetry, centered on solid black background. Wordmark "baca" below in lowercase, set in a refined sans-serif with subtle Arabic-inspired terminals, gold. Fluid, modern, culturally fluent. Premium Islamic branding, 8k, vector logo, high quality, no text artifacts.',
  },
  {
    slug: 'baca-03-guiding-light-emblem',
    name: 'Guiding Light Emblem',
    prompt:
      'Premium emblem logo design for "BACA" (a reading and meditation app). A geometric eight-pointed star formed by two overlapping squares (a classic geometric decorative motif) with an open book silhouette at its center. Subtle radiating geometric lines emanate from behind the star suggesting focused light. Tri-color palette: deep navy blue star outline, emerald green book, warm gold radiating lines. Hyperclean geometric vector with subtle metallic gold sheen, perfect symmetry, centered on solid black background. Wordmark "baca" below in lowercase, set in an elegant serif, gold. Premium, traditional-meets-modern, regal. Premium editorial branding, 8k, vector logo, high quality, no text artifacts.',
  },
];

async function generateOne(zai: any, concept: Concept): Promise<boolean> {
  const outPath = path.join(OUT_DIR, `${concept.slug}.png`);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
    console.log(`skip ${concept.slug} (exists)`);
    return true;
  }
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      console.log(`[${attempt}] ${concept.slug}...`);
      const resp = await zai.images.generations.create({
        prompt: concept.prompt,
        size: '1024x1024',
      });
      const buf = Buffer.from(resp.data[0].base64, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log(`  ✓ ${concept.slug} (${(buf.length / 1024).toFixed(0)} KB)`);
      return true;
    } catch (e: any) {
      console.error(`  ✗ ${concept.slug}: ${e.message.slice(0, 120)}`);
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
  console.log(`Generating ${CONCEPTS.length} Baca logo concepts...`);

  let ok = 0, fail = 0;
  for (const c of CONCEPTS) {
    const success = await generateOne(zai, c);
    if (success) ok++; else fail++;
    await new Promise((r) => setTimeout(r, 3000));
  }

  console.log(`\n=== Done: ${ok} success, ${fail} failed ===`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
