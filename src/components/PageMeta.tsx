import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { homes } from "@/data/property";
const titles: Record<string, string> = {
  "/": "Contemporary living in Yaba, Lagos",
  "/about-us": "About us",
  "/properties": "Properties",
  "/gallery": "Photo gallery",
  "/contact-us": "Contact us",
  "/neighbourhood": "The neighbourhood",
  "/details": "Features & amenities",
  "/floor-plans": "Floor plans",
};
export function PageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const home = homes.find((h) => path === `/property/${h.slug}`);
    const title = home?.type || titles[path] || "Page not found";
    const description =
      home?.description ||
      `Explore ${title.toLowerCase()} at Alcove Homes, Yaba, Lagos. View property details and arrange a visit.`;
    document.title = `${title} | Alcove Homes`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [pathname]);
  return null;
}
