const fs = require('fs');
const path = require('path');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateImagePaths() {
    const imagesFolder = path.join(process.cwd(), 'src', 'app', 'images');
    const imageFiles = fs.readdirSync(imagesFolder).filter(file => 
        ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
    );

    const shuffledImages = shuffleArray(imageFiles);

    const sections = ['home', 'story1', 'story2', 'story3', 'location', 'hotels'];

    const imagePaths = {};
    sections.forEach((section, index) => {
        imagePaths[section] = `/images/${shuffledImages[index % shuffledImages.length]}`;
    });

    return imagePaths;
}

module.exports = generateImagePaths;