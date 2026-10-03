import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

async function convertImages() {
  const files = fs.readdirSync(imagesDir);
  const jpgFiles = files.filter(file => /\.(jpe?g)$/i.test(file));
  
  console.log(`Optimizing ${jpgFiles.length} JPG files to WebP (quality 80)...`);

  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  for (const file of jpgFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputFilename = file.replace(/\.(jpe?g)$/i, '.webp');
    const outputPath = path.join(imagesDir, outputFilename);

    const inputStats = fs.statSync(inputPath);
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    totalOriginalSize += inputStats.size;
    totalWebpSize += outputStats.size;
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    console.log(`✓ ${file} -> ${outputFilename} (${(inputStats.size / 1024).toFixed(1)}KB -> ${(outputStats.size / 1024).toFixed(1)}KB, ${savings}% smaller)`);
  }

  const overallSavings = ((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1);
  console.log(`\nAll done! Total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB -> ${(totalWebpSize / 1024 / 1024).toFixed(2)}MB (${overallSavings}% overall reduction)`);
}

convertImages().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
