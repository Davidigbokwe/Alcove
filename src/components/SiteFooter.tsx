import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="brand-mark footer-brand" href="/">
        <span className="brand-emblem" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="brand-name">
          alcove<span>homes</span>
        </span>
      </a>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/about-us/">About us</Link>
        <Link to="/properties/">Properties</Link>
        <Link to="/neighbourhood/">Neighbourhood</Link>
        <Link to="/details/">Features</Link>
        <Link to="/floor-plans/">Floor plans</Link>
        <Link to="/gallery/">Gallery</Link>
        <Link to="/contact-us/">Contact us</Link>
      </nav>
      <a className="footer-top" href="#site-top">
        Back to top <ArrowUpRight aria-hidden="true" size={15} />
      </a>
      <small>
        <span>© {new Date().getFullYear()} Alcove Homes. All rights reserved.</span>
        <span className="footer-socials">
          <a
            href="https://www.facebook.com/alcovehomesng-102313231547837"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a href="https://www.linkedin.com/company/alcove-homes" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/alcovehomesng/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </span>
      </small>
    </footer>
  );
}
