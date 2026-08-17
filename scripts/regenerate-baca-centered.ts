/**
 * Regenerates BOTH Baca logos with prompts that explicitly ask for
 * vertically centered, balanced compositions. The previous versions
 * had the visual mass concentrated at the bottom, making them look
 * pushed down in their cards.
 *
 * Key prompt additions:
 * - "vertically centered composition"
 * - "equal negative space above and below the mark"
 * - "the mark is perfectly centered both horizontally and vertically"
 * - "no extra space at top or bottom"
 *
 * Run with: bun run /home/z/my-project/scripts/regenerate-baca-centered.ts
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/logos';

// Delete existing so they regenerate fresh
['baca-01-open-word.png', 'baca-02-calligraphic-flow.png'].forEach((f) => {
  const p = path.join(OUT_DIR, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
});

const CONCEPTS = [
  {
    slug: 'baca-01-open-word',
    prompt:
      'Premium minimalist logo icon mark (NO TEXT, no wordmark, no letters spelled out — just the symbol). A letter B formed by two symmetrical open book pages meeting at a central vertical golden light line. A single small gold dot floats centered directly above the B. CRITICAL: the entire mark (including the dot) must be PERFECTLY CENTERED both horizontally and vertically in the frame, with EQUAL negative space above the dot and below the bottom of the book pages. The mark fills 80% of the frame height. Emerald green to deep gold gradient on the book pages, pure warm gold for the vertical line and dot. Hyperclean single-stroke geometric vector, balanced negative space, solid black background. The composition MUST be vertically balanced — do not place the mark low or high in the frame. Premium branding, 8k, vector logo, high quality, no text artifacts, no words.',
  },
  {
    slug: 'baca-02-calligraphic-flow',
    prompt:
      'Premium logo icon mark (NO TEXT, no wordmark, no letters spelled out — just the symbol). A single continuous flowing line that traces the elegant curve of the Arabic letter ب (ba) and resolves into an open book silhouette. CRITICAL: the entire mark must be PERFECTLY CENTERED both horizontally and vertically in the frame, with EQUAL negative space above and below the mark. The mark fills 80% of the frame height and is positioned exactly in the center — do not extend it to the bottom or top edge. The composition MUST be vertically balanced with the visual weight distributed evenly. Deep emerald green with a subtle warm gold inner glow on the stroke. Hyperclean vector, perfect symmetry, solid black background. Premium branding, 8k, vector logo, high quality, no text artifacts, no words.',
  },
];

async function generateOne(zai: any, concept: typeof CONCEPTS[0]): Promise<boolean> {
  const outPath = path.join(OUT_DIR, `${concept.slug}.png`);
  for (let attempt = 1; attempt <= 5; attempt++) {
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
  console.log(`Regenerating ${CONCEPTS.length} Baca logos with centered composition...`);
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
