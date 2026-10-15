import { amenities } from "@/data/property";
export function AmenitiesSection() {
  return (
    <section className="details-section section-wrap" id="details">
      <div className="section-heading details-heading">
        <div>
          <span className="eyebrow">THE LITTLE THINGS. ALREADY THOUGHT OF.</span>
          <h2>
            Comfort, built <em>in.</em>
          </h2>
        </div>
        <p>The things that make the day run smoothly should already be part of home.</p>
      </div>
      <div className="amenities-grid">
        {amenities.map(({ icon: Icon, title, text }, index) => (
          <article className="amenity-item" key={title}>
            <span className="amenity-index">0{index + 1}</span>
            <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="finish-note">
        <span>IN EVERY HOME</span>
        <p>
          Porcelain tile floors <i>·</i> Fitted kitchen cabinets <i>·</i> Granite countertops{" "}
          <i>·</i> Water heaters <i>·</i> Allotted parking <i>·</i> Showers <i>·</i> Balconies
        </p>
      </div>
      <p className="penthouse-note">
        For a little extra: penthouse homes feature a rooftop terrace, walk-in closet and wraparound
        balcony.
      </p>
    </section>
  );
}
