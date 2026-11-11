import videos from '../data/youtube-videos.json';

export type Video = {
  title: string;
  videoId: string;
  published: string;
};

export function getVideos(): Video[] {
  return [...videos]
    .sort((left, right) => Date.parse(right.published) - Date.parse(left.published))
    .slice(0, 10);
}
