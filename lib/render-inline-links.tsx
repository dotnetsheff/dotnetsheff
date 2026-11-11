import type { ReactNode } from 'react';

const markdownLink = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderInlineLinks(value: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of value.matchAll(markdownLink)) {
    const [fullMatch, text, href] = match;
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(value.slice(lastIndex, index));
    }

    nodes.push(
      <a href={href} key={`${href}-${index}`}>
        {text}
      </a>,
    );

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < value.length) {
    nodes.push(value.slice(lastIndex));
  }

  return nodes;
}
