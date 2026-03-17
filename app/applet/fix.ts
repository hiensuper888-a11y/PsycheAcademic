import fs from 'fs';

const filePath = 'src/data/psychologyData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const targetStart = '<summary>心理欺骗与建立信任的技术</summary>';
const targetEnd = '永远不要 100% 撒谎。使用 80% 的真相，并将 20% 的谎言嵌入最关键的部分。真相提供了坚实的基础，使谎言变得不容置疑。';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = content.substring(0, startIndex + targetStart.length) + '\n\n### 1. 80/20 原则（混合真相）\n' + content.substring(endIndex);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Fixed successfully');
} else {
  console.log('Target not found');
}
