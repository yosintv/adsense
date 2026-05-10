const fs = require('fs');
const path = require('path');
const https = require('https');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'src/content');
const publicImagesDir = path.join(process.cwd(), 'public/images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function processFiles() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    if (data.image && data.image.startsWith('http')) {
      const cleanUrl = data.image.split('?')[0]; // Strip params to avoid weird 404s
      const extension = '.jpg';
      const imageName = `${file.replace('.md', '')}${extension}`;
      const destPath = path.join(publicImagesDir, imageName);
      
      console.log(`Downloading ${cleanUrl} to ${destPath}...`);
      try {
        await downloadImage(cleanUrl, destPath);
        data.image = `/images/${imageName}`;
        
        const newFileContent = matter.stringify(content, data);
        fs.writeFileSync(filePath, newFileContent);
        console.log(`Updated ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
        // If it fails, we keep the original URL or use a fallback
      }
    }
  }
}

processFiles();
