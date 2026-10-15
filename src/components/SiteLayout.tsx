import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
export function SiteLayout() {
  const location = useLocation();
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    main.current?.focus({ preventScroll: true });
  }, [location.pathname]);
  return (
    <div className="alcove-site" id="site-top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader key={location.pathname} />
      <main id="main-content" tabIndex={-1} ref={main}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
