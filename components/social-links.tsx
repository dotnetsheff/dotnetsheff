import { siteConfig } from '../lib/site-config';
import { BlueskyIcon, InstagramIcon, LinkedInIcon, XIcon } from './icons';

export function SocialLinks() {
  return (
    <>
      {siteConfig.socialLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            {renderIcon(link.icon)}
          </a>
        </li>
      ))}
    </>
  );
}

function renderIcon(icon: string) {
  switch (icon) {
    case 'x':
      return <XIcon className="social-icon" />;
    case 'bluesky':
      return <BlueskyIcon className="social-icon" />;
    case 'instagram':
      return <InstagramIcon className="social-icon" />;
    case 'linkedin':
      return <LinkedInIcon className="social-icon" />;
    default:
      return null;
  }
}
