type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  learnMoreText?: string;
  targetId?: string;
};

export function PageHero({ title, description, image, learnMoreText, targetId }: PageHeroProps) {
  return (
    <section id="hero" className="no-js-fullheight" style={{ backgroundImage: `url(${image})` }} data-next="yes">
      <div className="overlay" />
      <div className="container">
        <div className="intro no-js-fullheight">
          <div className="intro-text">
            <div className="center-position">
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
          </div>
        </div>
      </div>
      {learnMoreText && targetId ? (
        <div className="learn-more">
          <a href={`#${targetId}`} className="scroll-btn">
            <span className="text">{learnMoreText}</span>
            <span className="arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      ) : null}
    </section>
  );
}
