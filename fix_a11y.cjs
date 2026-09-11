const fs = require('fs');
const path = require('path');

const icons = [
  'ArrowRight', 'Calendar', 'CheckCircle', 'ChevronRight', 'Clock',
  'Droplets', 'GraduationCap', 'MapPin', 'Menu', 'MessageCircle',
  'MessageSquare', 'Phone', 'Scissors', 'Smile', 'Sparkles', 'User',
  'User2', 'UserCheck', 'X'
];

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Add aria-hidden="true" to Lucide icons
  for (const icon of icons) {
    const regex = new RegExp(`<${icon}(\\s+[^>]*?)?(?<!aria-hidden="true"\\s*|aria-hidden="true")>`, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, `<${icon}$1 aria-hidden="true">`);
      changed = true;
    }
    
    // Also handle self-closing ones like <Phone size={20} />
    const regexSelfClose = new RegExp(`<${icon}(\\s+[^>]*?)?(?<!aria-hidden="true"\\s*|aria-hidden="true")\\/>`, 'g');
    if (regexSelfClose.test(content)) {
      content = content.replace(regexSelfClose, `<${icon}$1 aria-hidden="true" />`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
