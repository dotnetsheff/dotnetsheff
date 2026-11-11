import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

export type Faq = {
  question: string;
  answer: string;
};

export type Sponsor = {
  name: string;
  type: string;
  description: string;
  image: string;
  website: string;
  agreements?: string[];
};

const sponsorPriority = ['Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor', 'Prize Sponsor', 'Venue Sponsor'];

export function getFaqs() {
  return readYaml<Faq[]>('faq.yml');
}

export function getCurrentSponsors() {
  const sponsors = readYaml<Sponsor[]>('sponsors.yml');
  const currentYearMonth = new Date().toISOString().slice(0, 7);

  return sponsors
    .filter((sponsor) => !sponsor.agreements || sponsor.agreements.includes(currentYearMonth))
    .sort((left, right) => {
      const leftPriority = sponsorPriority.indexOf(left.type);
      const rightPriority = sponsorPriority.indexOf(right.type);
      return priorityValue(leftPriority) - priorityValue(rightPriority) || left.name.localeCompare(right.name);
    });
}

function readYaml<T>(fileName: string): T {
  const fullPath = path.join(process.cwd(), '_data', fileName);
  return parse(fs.readFileSync(fullPath, 'utf8')) as T;
}

function priorityValue(priority: number) {
  return priority === -1 ? Number.MAX_SAFE_INTEGER : priority;
}
