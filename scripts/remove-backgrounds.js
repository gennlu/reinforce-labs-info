import sharp from 'sharp';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

const logos = ['centific-logo.png', 'mercor-logo.png', 'turing-logo.png'];

async function removeBackground(filename) {
  const inputPath = path.join(imagesDir, filename);
  const outputPath = path.join(imagesDir, filename.replace('.png', '-clean.png'));
  
  try {
    const image = sharp(inputPath);
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const pixels = new Uint8Array(data);
    
    // Process each pixel - make light grey/white backgrounds transparent
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      
      // Check if pixel is light grey/white background (RGB values close together and high)
      const isGrey = r > 220 && g > 220 && b > 220 && 
                     Math.abs(r - g) < 15 && Math.abs(g - b) < 15 && Math.abs(r - b) < 15;
      
      if (isGrey) {
        pixels[i + 3] = 0; // Set alpha to 0 (transparent)
      }
    }
    
    await sharp(Buffer.from(pixels), {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
      .png()
      .toFile(outputPath);
    
    console.log(`Processed: ${filename} -> ${filename.replace('.png', '-clean.png')}`);
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('Removing backgrounds from logos...');
  for (const logo of logos) {
    await removeBackground(logo);
  }
  console.log('Done!');
}

main();
