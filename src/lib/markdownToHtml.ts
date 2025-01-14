import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs/promises';
import path from 'path';

export async function markdownToHtml(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  return processedContent.toString();
}