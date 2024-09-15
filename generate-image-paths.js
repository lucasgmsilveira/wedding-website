const fs = require('fs');
const path = require('path');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const imagesFolder = path.join(__dirname, 'images');
const imageFiles = fs.readdirSync(imagesFolder).filter(file => 
    ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
);

const shuffledImages = shuffleArray(imageFiles);

const sections = ['home', 'story1', 'story2', 'story3', 'location', 'hotels'];

let css = '';
sections.forEach((section, index) => {
    // Use relative path instead of absolute path
    const imagePath = `images/${shuffledImages[index % shuffledImages.length]}`;
    css += `#${section} .background-image { background-image: url('${imagePath}'); }\n`;
    css += `#${section} .dynamic-image { background-image: url('${imagePath}'); }\n\n`;
});

fs.writeFileSync(path.join(__dirname, 'generated-image-styles.css'), css);

console.log('Image styles have been generated and saved to generated-image-styles.css');