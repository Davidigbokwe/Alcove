import { Link } from "react-router-dom";
import { PageIntro } from "@/components/PageIntro";
export default function NotFoundPage() {
  return (
    <>
      <PageIntro
        title="Page not found"
        eyebrow="404"
        text="We couldn’t find this address. Explore our homes or get in touch with the team."
      />
      <div className="section-wrap not-found-links">
        <Link to="/">Back home</Link>
        <Link to="/properties/">Explore properties</Link>
      </div>
    </>
  );
}
