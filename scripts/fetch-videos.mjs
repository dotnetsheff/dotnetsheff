import fs from 'node:fs/promises';
import path from 'node:path';

const channelId = 'UCCUdb9Kq96IUUGaS6WNUAeg';
const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
const outputPath = path.join(process.cwd(), 'data', 'youtube-videos.json');

try {
  const response = await fetch(feedUrl);

  if (!response.ok) {
    throw new Error(`YouTube feed returned ${response.status}`);
  }

  const xml = await response.text();
  const videos = parseVideos(xml)
    .sort((left, right) => Date.parse(right.published) - Date.parse(left.published))
    .slice(0, 10);

  if (videos.length === 0) {
    throw new Error('YouTube feed did not contain any videos');
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(`${outputPath}.tmp`, `${JSON.stringify(videos, null, 2)}\n`, 'utf8');
  await fs.rename(`${outputPath}.tmp`, outputPath);
  console.log(`Updated ${videos.length} videos from the dotnetsheff YouTube feed.`);
} catch (error) {
  try {
    await fs.access(outputPath);
    console.warn(`Could not update YouTube videos, using cached data: ${error.message}`);
  } catch {
    console.error(`Could not update YouTube videos and no cache exists: ${error.message}`);
    process.exitCode = 1;
  }
}

function parseVideos(xml) {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    .map(([, entry]) => ({
      title: decodeXml(readTag(entry, 'title')),
      videoId: readTag(entry, 'yt:videoId'),
      published: readTag(entry, 'published'),
    }))
    .filter((video) => video.title && video.videoId && video.published);
}

function readTag(value, tagName) {
  const escapedTagName = tagName.replace(':', '\\:');
  const match = value.match(new RegExp(`<${escapedTagName}>([\\s\\S]*?)<\\/${escapedTagName}>`));
  return match?.[1]?.trim() ?? '';
}

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}
