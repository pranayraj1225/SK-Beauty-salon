const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'ServiceCards.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Add imports
if (!content.includes('import serviceImg3')) {
  content = content.replace(
    "import serviceImg2 from '../assets/images/regenerated_image_1789108903007.jpg';",
    "import serviceImg2 from '../assets/images/regenerated_image_1789108903007.jpg';\nimport serviceImg3 from '../assets/images/regenerated_image_1789113237607.jpg';\nimport serviceImg4 from '../assets/images/regenerated_image_1789113239575.jpg';\nimport serviceImg5 from '../assets/images/regenerated_image_1789113240593.jpg';"
  );
}

// Replace picsum.photos with new image variables
content = content.replace(/"https:\/\/picsum\.photos\/seed\/facial\/800\/600"/g, "{serviceImg3}");
content = content.replace(/"https:\/\/picsum\.photos\/seed\/manicure\/800\/600"/g, "{serviceImg4}");
content = content.replace(/"https:\/\/picsum\.photos\/seed\/makeup\/800\/600"/g, "{serviceImg5}");

fs.writeFileSync(filePath, content, 'utf-8');
