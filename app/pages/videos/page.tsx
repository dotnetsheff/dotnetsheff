import { PageHero } from '../../../components/page-hero';
import { getVideos } from '../../../lib/videos';

export const metadata = {
  title: 'Videos',
  description: 'Check out our previous events',
};

export default function VideosPage() {
  const videos = getVideos();

  return (
    <>
      <PageHero
        title="Videos"
        description="Check out our previous events"
        image="/images/videos.jpg"
        learnMoreText="See the videos"
        targetId="videos"
      />
      <section id="videos">
        <div className="container">
          {chunk(videos, 3).map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((video) => (
                <div className="col-md-4 col-sm-6 col-xxs-12" key={video.videoId}>
                  <span className="video-item">
                    <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
                      <img
                        src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={`Watch ${video.title}`}
                        width="480"
                        height="360"
                      />
                    </a>
                    <div className="text">
                      <h2>
                        <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
                          {video.title}
                        </a>
                      </h2>
                      <p className="video-meta">Published on {formatDate(video.published)}</p>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function chunk<T>(items: T[], size: number) {
  const rows: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }
  return rows;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value));
}
