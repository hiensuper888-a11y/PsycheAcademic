import fs from 'fs';
const content = fs.readFileSync('src/data/psychologyData.ts', 'utf8');
const index = content.indexOf('\uFFFD');
if (index !== -1) {
  console.log('Found U+FFFD at index', index);
} else {
  console.log('No U+FFFD found');
}
