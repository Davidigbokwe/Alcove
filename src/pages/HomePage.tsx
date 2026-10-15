import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown, ArrowRight, BedDouble, ChevronDown, MapPin } from "lucide-react";
import { homes } from "@/data/property";
import { Button } from "@/components/ui/button";
import { Residences } from "@/components/Residences";
export default function HomePage() {
  const [propertyType, setPropertyType] = useState("All residences");
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={"/images/alcove-tower.jpg"}
          alt="Alcove Homes, a contemporary residential community in Yaba, Lagos"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">
            <span className="eyebrow-dot" /> YABA, LAGOS · ALCOVE HOMES
          </span>
          <h1 id="hero-title">
            A little more
            <br />
            room to <em>belong.</em>
          </h1>
          <p>
            Made for the life you’re building. Find your own corner of Lagos in the heart of Yaba.
          </p>
          <Link className="hero-link" to="/properties/">
            Discover the residences <ArrowDown aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="hero-caption">
          <span>01 — 04</span>
          <span>Modern living, rooted in Yaba</span>
        </div>
        <div className="search-panel" aria-label="Find your home">
          <div className="search-intro">
            <span>Find your place</span>
            <small>One considered address. Four ways to call it home.</small>
          </div>
          <label className="search-select">
            <MapPin aria-hidden="true" size={17} />
            <span>
              <small>NEIGHBOURHOOD</small>
              <strong>Yaba, Lagos</strong>
            </span>
            <ChevronDown aria-hidden="true" size={16} />
          </label>
          <label className="search-select search-type-select">
            <BedDouble aria-hidden="true" size={17} />
            <span>
              <small>HOME TYPE</small>
              <select
                aria-label="Choose a home type"
                value={propertyType}
                onChange={(event) => setPropertyType(event.target.value)}
              >
                <option>All residences</option>
                {homes.map((home) => (
                  <option key={home.type}>{home.type}</option>
                ))}
              </select>
            </span>
            <ChevronDown aria-hidden="true" size={16} />
          </label>
          <Button
            className="search-action"
            onClick={() =>
              navigate(
                "/properties/" +
                  (propertyType === "All residences"
                    ? ""
                    : "?type=" + encodeURIComponent(propertyType)),
              )
            }
          >
            Explore homes <ArrowRight aria-hidden="true" size={17} />
          </Button>
        </div>
      </section>
      <section className="proof-strip" aria-label="Alcove Homes at a glance">
        <div>
          <strong>Yaba</strong>
          <span>Lagos’ creative heart</span>
        </div>
        <div>
          <strong>
            138 <small>sqm</small>
          </strong>
          <span>3-bedroom apartment</span>
        </div>
        <div>
          <strong>3 &amp; 4</strong>
          <span>Bedroom residences</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Power and peace of mind</span>
        </div>
      </section>
      <Residences />
      <section className="page-teasers section-wrap">
        <span className="eyebrow">GET TO KNOW ALCOVE</span>
        <h2>
          A little more <em>to discover.</em>
        </h2>
        <div>
          {[
            {
              to: "/about-us/",
              title: "About Alcove",
              text: "Our developer, our values, and the thought behind your next home.",
            },
            {
              to: "/neighbourhood/",
              title: "Life in Yaba",
              text: "Schools, transport and everyday life around your address.",
            },
            {
              to: "/gallery/",
              title: "Take a closer look",
              text: "Explore the exteriors, interiors and facilities in our gallery.",
            },
          ].map((item) => (
            <Link key={item.to} to={item.to}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ArrowRight aria-hidden="true" size={20} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
