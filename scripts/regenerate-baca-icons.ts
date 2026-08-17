/**
 * Regenerates the 2 Baca logos as PURE ICON MARKS (no wordmark text below)
 * so they match the other 72 logos in the studio which are all icon-only.
 *
 * Run with: bun run /home/z/my-project/scripts/regenerate-baca-icons.ts
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/logos';

// Delete existing Baca logos so they regenerate fresh
['baca-01-open-word.png', 'baca-02-calligraphic-flow.png'].forEach((f) => {
  const p = path.join(OUT_DIR, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
});

const CONCEPTS = [
  {
    slug: 'baca-01-open-word',
    prompt:
      'Premium minimalist logo icon mark (NO TEXT, no wordmark, no letters spelled out — just the symbol). Letter B formed by two symmetrical open book pages meeting at a central vertical golden light line (the book spine doubling as a beam of light). A single small gold dot floats centered above the B (doubling as a guiding star and an Arabic diacritical mark). Emerald green to deep gold gradient on the book pages, pure warm gold for the vertical line and dot. Hyperclean single-stroke geometric vector, balanced negative space, the mark fills 85% of the frame and is perfectly centered. Solid black background. Premium Islamic branding, 8k, vector logo, high quality, no text artifacts, no words.',
  },
  {
    slug: 'baca-02-calligraphic-flow',
    prompt:
      'Premium logo icon mark (NO TEXT, no wordmark, no letters spelled out — just the symbol). A single continuous flowing line that traces the elegant curve of the Arabic letter ب (ba) and resolves into the silhouette of an open book — the tail of the ba becoming the page curve. One unbroken stroke, calligraphic but modern and geometric. Deep emerald green with a subtle warm gold inner glow on the stroke. Hyperclean vector, perfect symmetry, the mark fills 85% of the frame and is perfectly centered. Solid black background. Premium Islamic branding, 8k, vector logo, high quality, no text artifacts, no words.',
  },
];

async function generateOne(zai: any, concept: typeof CONCEPTS[0]): Promise<boolean> {
  const outPath = path.join(OUT_DIR, `${concept.slug}.png`);
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
  const zai = await ZAI.create();
  console.log(`Regenerating ${CONCEPTS.length} Baca logos as pure icon marks...`);
  for (const c of CONCEPTS) {
    await generateOne(zai, c);
    await new Promise((r) => setTimeout(r, 3000));
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
