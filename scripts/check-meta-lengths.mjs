import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/data/seo.ts', import.meta.url), 'utf8');
const lines = src.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.startsWith("'") && (line.endsWith("',") || line.endsWith("'"))) {
    const text = line.replace(/^'/, '').replace(/',?$/, '');
    const label = lines[i - 1]?.trim().replace(':', '');
    const flag = text.length < 140 || text.length > 165 ? '  <-- CHECK' : '';
    console.log(`${text.length}\t${label}\t${text.slice(0, 50)}${flag}`);
  }
}
