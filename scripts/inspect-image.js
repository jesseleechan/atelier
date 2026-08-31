import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagePath = 'C:/Users/trevo/.gemini/antigravity/brain/aafadaf9-2963-4b7f-99f3-97664322ef69/.user_uploaded/media_1788109167545.png';

async function main() {
  const metadata = await sharp(imagePath).metadata();
  console.log('Image dimensions:', metadata.width, 'x', metadata.height);

  const outDir = path.resolve('public/extracted');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Let's create high resolution crops from the screenshot
  // 1. Hero banner: from top to where hero ends
  // 2. Doorway image in Focus Service 01
  // 3. Solarium image in Focus Service 02
  console.log('Metadata:', metadata);
}

main().catch(console.error);
