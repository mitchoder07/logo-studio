/**
 * Retries the 4 failed logos sequentially with delays to avoid 429.
 */
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/logos';

const RETRY: { slug: string; prompt: string }[] = [
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
  {
    slug: 'lumen-health',
    prompt:
      'Logo design for "LUMEN", abstract medical cross formed by overlapping light beams, soft teal to white gradient, hyperclean geometric vector with glow, centered on solid black background, healthcare branding, 8k',
  },
  {
    slug: 'scholae-academy',
    prompt:
      'Logo design for "SCHOLAE", heraldic crest with open book and laurel wreath, navy blue and gold gradient, hyperclean vector emblem, glowing edges, centered on solid black background, education branding, 8k',
  },
];

async function main() {
  const zai = await ZAI.create();
  for (const spec of RETRY) {
    const outPath = path.join(OUT_DIR, `${spec.slug}.png`);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
      console.log(`skip ${spec.slug} (exists)`);
      continue;
    }
    let attempt = 0;
    while (attempt < 4) {
      attempt++;
      try {
        console.log(`[${attempt}] ${spec.slug}...`);
        const resp = await zai.images.generations.create({
          prompt: spec.prompt,
          size: '1024x1024',
        });
        const buf = Buffer.from(resp.data[0].base64, 'base64');
        fs.writeFileSync(outPath, buf);
        console.log(`  ✓ ${spec.slug} (${(buf.length / 1024).toFixed(0)} KB)`);
        break;
      } catch (e: any) {
        console.error(`  ✗ ${spec.slug}: ${e.message}`);
        const wait = 8000 * attempt;
        console.log(`  waiting ${wait}ms...`);
        await new Promise((r) => setTimeout(r, wait));
      }
    }
    // polite delay between calls
    await new Promise((r) => setTimeout(r, 3000));
  }
  console.log('Retry pass complete.');
}

main();
