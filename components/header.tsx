import Link from 'next/link';
import { SocialLinks } from './social-links';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/pages/faq/', label: 'FAQ' },
  { href: '/pages/videos/', label: 'Videos' },
];

export function Header() {
  return (
    <section id="header">
      <div className="container">
        <nav role="navigation" aria-label="Main navigation">
          <ul className="pull-left left-menu">
            {pages.map((page) => (
              <li key={page.href}>
                <Link className="page-link" href={page.href}>{page.label}</Link>
              </li>
            ))}
          </ul>
          <h1 id="logo">
            <Link href="/">dot<span>net</span>sheff</Link>
          </h1>
          <ul className="pull-right right-menu">
            <SocialLinks />
          </ul>
        </nav>
      </div>
    </section>
  );
}
