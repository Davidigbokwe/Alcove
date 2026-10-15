import { Link } from "react-router-dom";
import { homes } from "@/data/property";
import assets from "@/data/original-assets.json";
import { PageIntro } from "./PageIntro";
import { PhotoGallery } from "./PhotoGallery";
import { AmenitiesSection } from "./AmenitiesSection";

export function PropertyDetails({ slug }: { slug: keyof typeof assets.properties }) {
  const home = homes.find((item) => item.slug === slug)!;
  const media = assets.properties[slug];
  const enquire = `/contact-us/?property=${encodeURIComponent(home.type)}`;
  return (
    <>
      <PageIntro
        title={home.type}
        eyebrow={home.name.toUpperCase()}
        text="19 Ishola Street, Adekunle, Yaba, Lagos, Nigeria"
      />
      <section className="property-overview section-wrap">
        <img
          className="property-cover"
          src={media.photos[0]?.src || home.image}
          alt={media.photos[0]?.alt || home.imageAlt}
        />
        <div className="property-summary">
          <span className="eyebrow">FOR SALE · PROPERTY {home.id}</span>
          <p className="property-starting-price">
            From <strong>₦{home.price} million</strong>
          </p>
          <dl>
            {[
              { label: "Bedrooms", value: home.beds },
              { label: "Bathrooms", value: home.baths },
              { label: "Floor area", value: `${home.area} sqm` },
              { label: "Parking spaces", value: 2 },
            ].map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <Link className="page-button" to={enquire}>
            Enquire about this home →
          </Link>
          <p className="plan-note">
            Starting price published by Alcove Homes. Confirm current pricing and availability with
            the sales team.
          </p>
        </div>
      </section>
      <section className="property-description section-wrap">
        <div>
          <span className="eyebrow">ROOM TO BELONG</span>
          <h2>
            A closer look at <em>your home.</em>
          </h2>
          <p>{home.description}</p>
        </div>
        <div>
          <h3>Inside this residence</h3>
          <ul>
            {home.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>One-bedroom BQ with a toilet and shower</li>
            <li>Two parking spaces</li>
            <li>Access to the communal garden and children’s playground</li>
          </ul>
        </div>
      </section>
      <PhotoGallery key={slug} photos={media.photos} />
      <section className="property-plans section-wrap">
        <span className="eyebrow">THE LAYOUT</span>
        <h2>
          Your home, <em>level by level.</em>
        </h2>
        {media.plans.length ? (
          <div className="property-plan-grid">
            {media.plans.map((plan, index) => (
              <figure key={plan.src}>
                <a href={plan.src} target="_blank" rel="noreferrer">
                  <img src={plan.src} alt={`${home.type} floor plan ${index + 1}`} loading="lazy" />
                </a>
                <figcaption>
                  <span>
                    {home.beds === 4
                      ? ["Ground floor · 65 sqm", "First floor · 64 sqm", "Second floor · 65 sqm"][
                          index
                        ]
                      : slug === "3-bedroom-maisonette"
                        ? ["Ground floor · 67 sqm", "First floor · 76 sqm"][index]
                        : "Apartment layout · 138 sqm"}
                  </span>
                  <a href={plan.src} download>
                    Download plan
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p>
            The original penthouse listing provides a 276 sqm floor area.{" "}
            <Link to={enquire}>Request the detailed penthouse floor plan from our team.</Link>
          </p>
        )}
      </section>
      <AmenitiesSection />
      <section className="property-next section-wrap">
        <h2>
          Could this be <em>your place?</em>
        </h2>
        <Link className="page-button" to={enquire}>
          Arrange a visit →
        </Link>
        <Link className="text-link" to="/properties/">
          Explore all residences →
        </Link>
      </section>
    </>
  );
}
