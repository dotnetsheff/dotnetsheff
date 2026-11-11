import { Sponsors } from '../components/sponsors';
import { CommunityIcon, PizzaIcon, PoundIcon } from '../components/icons';

export default function HomePage() {
  return (
    <>
      <section id="hero" className="js-fullheight" style={{ backgroundImage: 'url(/images/home-landing-page.jpg)' }} data-next="yes">
        <div className="overlay" />
        <div id="home" className="container">
          <div className="intro js-fullheight">
            <div className="intro-text">
              <div className="left-position">
                <h2>Join us at our next event</h2>
                <p>We regularly meet in Sheffield for expert talks, free pizza, drinks, and relaxed socialising before and after the talks.</p>
                <p>Check Meetup for the latest date, venue, and speaker details.</p>
                <p>
                  <a href="https://www.meetup.com/dotnetsheff" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Join us on Meetup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="learn-more">
          <a href="#the-group" className="scroll-btn">
            <span className="text">Explore more about us</span>
            <span className="arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="the-group">
        <div className="container">
          <div className="row text-center row-bottom-padded-md">
            <div className="col-md-8 col-md-offset-2">
              <figure className="devices">
                <img src="/images/the_user_group.png" alt="People from the dotnetsheff user group" className="img-responsive" />
              </figure>
              <h2 className="lead">About DotNetSheff</h2>
              <p className="sub-lead">
                DotNetSheff is a friendly Sheffield tech meetup for anyone interested in software development, .NET, AI,
                web, cloud, games, architecture, and modern engineering. Whether you are a student, junior developer,
                experienced engineer, or just curious about tech, you are welcome.
              </p>
              <p className="sub-lead">
                Please get in touch via <a href="https://x.com/dotnetsheff">Twitter (@dotnetsheff)</a> or email
                {' '}<a href="mailto:organisers@dotnetsheff.co.uk">organisers@dotnetsheff.co.uk</a> if you or someone you
                know may be interested in speaking.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="feature">
                <div className="icon" aria-hidden="true">
                  <CommunityIcon className="feature-icon" />
                </div>
                <h3>Open to everyone</h3>
                <p>Students, junior developers, experienced engineers, and people who are simply curious about tech are all welcome.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="feature">
                <div className="icon" aria-hidden="true">
                  <PoundIcon className="feature-icon" />
                </div>
                <h3>Always free</h3>
                <p>DotNetSheff is free to attend, with free pizza and drinks thanks to our sponsors.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="feature">
                <div className="icon" aria-hidden="true">
                  <PizzaIcon className="feature-icon" />
                </div>
                <h3>Pizza and drinks</h3>
                <p>Come along for relaxed socialising before and after the talks, usually with pizza, beer, and soft drinks.</p>
              </div>
            </div>
            <div className="clearfix visible-sm-block" />
          </div>
        </div>
      </section>

      <Sponsors />

      <section id="join-community">
        <div className="container">
          <div className="col-md-6 col-md-push-6">
            <figure className="feature-image">
              <img src="/images/whatsapp-community.svg" alt="" />
            </figure>
          </div>
          <div className="col-md-6 col-md-pull-6">
            <span>Join our community chat</span>
            <h2 className="lead">WhatsApp community</h2>
            <p>
              We use WhatsApp to keep attendees up to date between events. Ask us for the community invite link at the
              next meetup.
            </p>

            <div className="btn-action">
              <a href="https://www.meetup.com/dotnetsheff" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta">Next meetup</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
