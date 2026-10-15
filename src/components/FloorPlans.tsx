import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const plans = [
  {
    title: "3 Bedroom Apartment",
    file: "MASIONETTE-5th-floor-1024x724.jpg",
    description: "Single-level apartment layout, shown on the fifth floor.",
  },
  {
    title: "3 Bedroom Maisonette · First level",
    file: "3BR-Maisonette-res-1024x724.jpg",
    description: "Living, dining and kitchen spaces on the first level.",
  },
  {
    title: "3 Bedroom Maisonette · Second level",
    file: "3-BR-Apartment-22-1024x724.jpg",
    description: "Bedrooms and bathrooms on the upper level.",
  },
  {
    title: "4 Bedroom Terrace · Ground floor",
    file: "4BR-Terrace-Ground-Floor.jpg",
    description: "The ground floor of the terrace residence.",
  },
  {
    title: "4 Bedroom Terrace · First floor",
    file: "4BR-Terrace-First-Floor-1024x724.jpg",
    description: "The first floor of the terrace residence.",
  },
  {
    title: "4 Bedroom Terrace · Second floor",
    file: "4BR-Terrace-Second-Floor-1024x724.jpg",
    description: "The second floor of the terrace residence.",
  },
];

export function FloorPlans() {
  const [selected, setSelected] = useState(0);
  const plan = plans[selected]!;
  return (
    <section className="floor-plans section-wrap" id="floor-plans" aria-labelledby="plans-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SPACE FOR YOUR EVERYDAY</span>
          <h2 id="plans-title">
            A plan for <em>living.</em>
          </h2>
        </div>
        <p>
          Explore the original layouts. From one level to three, find a space that feels right for
          you.
        </p>
      </div>
      <div className="plan-layout">
        <div className="plan-options" role="group" aria-label="Choose a floor plan">
          {plans.map((item, index) => (
            <button
              key={item.file}
              type="button"
              aria-pressed={index === selected}
              onClick={() => setSelected(index)}
            >
              <span>0{index + 1}</span>
              {item.title}
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        <figure className="plan-preview" aria-live="polite">
          <a
            href={`/floor-plans/${plan.file}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size ${plan.title} floor plan`}
          >
            <img
              src={`/floor-plans/${plan.file}`}
              alt={`${plan.title} architectural floor plan`}
              loading="lazy"
              width="1024"
              height="724"
            />
          </a>
          <figcaption>
            <div>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
            </div>
            <a href={`/floor-plans/${plan.file}`} download>
              Download plan <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </figcaption>
        </figure>
      </div>
      <p className="plan-note">
        Original floor plans from Alcove Homes. Please confirm dimensions, availability and current
        pricing with our team.
      </p>
    </section>
  );
}
