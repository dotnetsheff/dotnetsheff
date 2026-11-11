import Link from 'next/link';
import { SocialLinks } from './social-links';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="row row-bottom-padded-md">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h3>DotNetSheff</h3>
              <ul className="links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pages/faq/">FAQ</Link></li>
                <li><Link href="/pages/videos/">Videos</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h3>Venues</h3>
              <p>
                Sheffield Hallam University,<br />
                Sheffield Technology Parks,<br />
                and Goodlord Offices.<br />
                Check Meetup for each event venue.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-widget">
              <h3>Follow Us</h3>
              <ul className="social">
                <SocialLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="left"><small>&copy; {year} DotNetSheff. All rights reserved.</small></p>
              <p className="right"><small className="right">DotNetSheff is organised by the DotNetSheff community team.</small></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
