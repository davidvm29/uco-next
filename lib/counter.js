// utils/counter.js
import fs from 'fs';
import path from 'path';

const counterFilePath = path.resolve('./visits.json');

function readCountFile() {
  try {
    const fileContents = fs.readFileSync(counterFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return {};
  }
}

export function getVisitCount(slug) {
  const counts = readCountFile();
  return counts[slug] || 0;
}

export function incrementVisitCount(slug) {
  const counts = readCountFile();
  const currentCount = counts[slug] || 0;
  counts[slug] = currentCount + 1;
  fs.writeFileSync(counterFilePath, JSON.stringify(counts));
  return counts[slug];
}
