import { Link } from "react-router-dom";
import { PageIntro } from "@/components/PageIntro";
export default function AboutUsPage() {
  return (
    <>
      <PageIntro
        title="About Alcove Homes"
        eyebrow="THOUGHTFUL HOMES. LASTING VALUE."
        text="Homes shaped around the people who live in them, in the heart of Yaba, Lagos."
      />
      <section className="about-story section-wrap">
        <img
          src="/images/alcove-residences.jpg"
          alt="Alcove Homes residential development in Yaba"
        />
        <div>
          <span className="eyebrow">THE PEOPLE BEHIND THE ADDRESS</span>
          <h2>
            Built with <em>purpose.</em>
          </h2>
          <p>
            Alcove Homes is a development by GlobalMix Capital Ltd., a private equity company
            established in 2007. The company works across real estate, communications, food, pension
            funds and financial services in Nigeria.
          </p>
          <p>
            Its approach to development combines considered locations, quality specifications and
            homes designed for long-term living. The board brings experience from a range of
            professional fields to the company’s work.
          </p>
          <Link className="text-link" to="/properties/">
            Explore our residences →
          </Link>
        </div>
      </section>
      <section className="about-values section-wrap">
        <span className="eyebrow">OUR VALUES</span>
        <h2>
          What makes a house <em>home.</em>
        </h2>
        <div>
          {[
            {
              title: "Quality",
              text: "Developments that add value to residents, investors and the surrounding community.",
            },
            {
              title: "Innovation",
              text: "Practical features and considered solutions that make daily life at home more comfortable.",
            },
            {
              title: "Trust",
              text: "Experience, care and a commitment to creating homes people can be proud to own.",
            },
          ].map((v) => (
            <article key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" to="/contact-us/">
          Speak to a sales advisor →
        </Link>
      </section>
    </>
  );
}
