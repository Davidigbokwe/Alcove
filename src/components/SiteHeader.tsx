import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink, useLocation } from "react-router-dom";
export function SiteHeader() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      {" "}
      <div className="site-note">
        <span>Thoughtful homes in the heart of Yaba</span>
        <a href="tel:+2348061995277">
          Speak with our team <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </div>
      <header className="site-header">
        <Link className="brand-mark" to="/" aria-label="Alcove Homes home">
          <span className="brand-emblem" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">
            alcove<span>homes</span>
          </span>
        </Link>
        <button
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          id="main-navigation"
          className={`site-nav${mobileMenuOpen ? " site-nav-open" : ""}`}
          aria-label="Main navigation"
          onClick={() => setMobileMenuOpen(false)}
        >
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about-us/">About us</NavLink>
          <NavLink
            to="/properties/"
            className={({ isActive }) =>
              isActive || pathname.startsWith("/property/") ? "active" : ""
            }
          >
            Properties
          </NavLink>
          <NavLink to="/gallery/">Gallery</NavLink>
          <NavLink to="/contact-us/">Contact us</NavLink>
          <Button size="sm" className="nav-cta" asChild>
            <Link to="/contact-us/">
              Arrange a visit <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </Button>
        </nav>
      </header>
    </>
  );
}
