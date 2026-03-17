import fs from 'fs';

const filePath = 'src/data/psychologyData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Fix line 918
const badLine918Regex = /<p><strong>Cơ chế:<\/strong> Kẻ thao túng sử dụng cường độ cảm xúc cực mạnh để làm quá tải khả năng xử lý logic của não b.*t uy tín trước mặt người khác\./;
const goodLine918 = '<p><strong>Cơ chế:</strong> Kẻ thao túng sử dụng cường độ cảm xúc cực mạnh để làm quá tải khả năng xử lý logic của não bộ, khiến bạn đưa ra quyết định sai lầm hoặc đánh mất uy tín trước mặt người khác.</p>';
content = content.replace(badLine918Regex, goodLine918);

// Fix line 1038
const badLine1038Regex = /- \*\*The Pivot:\*\* When faced with an unknown topic, say: "That.*逻辑过滤器。/;
const goodLine1038 = '- **The Pivot:** When faced with an unknown topic, say: "That\'s an interesting question, but the core issue we need to focus on here is..." then pivot to what you know.';
content = content.replace(badLine1038Regex, goodLine1038);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed successfully');
