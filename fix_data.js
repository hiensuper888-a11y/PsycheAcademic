import fs from 'fs';

const filePath = 'src/data/psychologyData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find the corrupted line and replace it
// We know it's around line 896
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('过度的关注 and 赞美淹没某人')) {
    console.log(`Found corrupted line at index ${i}: ${lines[i]}`);
    lines[i] = '    },';
    // Also remove the following lines that seem misplaced
    let j = i + 1;
    while (j < lines.length && (lines[j].includes('恐惧-缓解循环') || lines[j].includes('感官过载') || lines[j].includes('</details>') || lines[j].trim() === '')) {
      console.log(`Removing misplaced line at index ${j}: ${lines[j]}`);
      lines.splice(j, 1);
    }
    break;
  }
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log('File fixed successfully.');
