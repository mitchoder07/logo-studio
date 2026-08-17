/**
 * Regenerates baca-02-calligraphic-flow with:
 * - Brighter, more vivid colors (high contrast, clearly visible)
 * - Baca web app color palette: emerald → cyan → indigo gradient
 * - Same calligraphic concept (Arabic ب + open book)
 *
 * Run with: bun run /home/z/my-project/scripts/regenerate-baca02-bright.ts
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/logos';

const CONCEPT = {
  slug: 'baca-02-calligraphic-flow',
  prompt:
    'Premium logo icon mark (NO TEXT, no wordmark, no letters spelled out — just the symbol). A single continuous flowing line that traces the elegant curve of the Arabic letter ب (ba) and resolves into an open book silhouette — the tail of the ba becoming the page curve. One unbroken stroke, calligraphic but modern and geometric. BRIGHT VIVID COLORS: the stroke uses a bright gradient from emerald green (#10b981) to cyan (#06b6d4) to indigo (#6366f1), with a soft glowing aura around the stroke so it pops against the black background. The stroke is THICK and BOLD — clearly visible, not thin or faint. Hyperclean vector, perfect symmetry, the mark fills 80% of the frame and is perfectly centered both horizontally and vertically. Solid black background (#000000). The colors should be SATURATED and LUMINOUS — think neon-bright, glowing, high-contrast. Premium modern branding, 8k, vector logo, high quality, no text artifacts, no words.',
};

async function main() {
  const zai = await ZAI.create();
  const outPath = path.join(OUT_DIR, `${CONCEPT.slug}.png`);

  // Delete existing
  if (fs.existsSync(outPath)) fs.unlinkSync(outPath);

  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      console.log(`[${attempt}] ${CONCEPT.slug}...`);
      const resp = await zai.images.generations.create({
        prompt: CONCEPT.prompt,
        size: '1024x1024',
      });
      const buf = Buffer.from(resp.data[0].base64, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log(`  ✓ ${CONCEPT.slug} (${(buf.length / 1024).toFixed(0)} KB)`);
      break;
    } catch (e: any) {
      console.error(`  ✗ ${CONCEPT.slug}: ${e.message.slice(0, 120)}`);
      const wait = 6000 * attempt;
      console.log(`  waiting ${wait}ms...`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
