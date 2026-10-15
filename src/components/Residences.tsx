import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BedDouble, ChevronDown, Heart, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homes } from "@/data/property";
export function Residences() {
  const [params, setParams] = useSearchParams();
  const propertyType = params.get("type") || "All residences";
  const setPropertyType = (value: string) =>
    setParams(value === "All residences" ? {} : { type: value });
  const [savedHomes, setSavedHomes] = useState<string[]>([]);
  const visibleHomes = useMemo(
    () => homes.filter((home) => propertyType === "All residences" || home.type === propertyType),
    [propertyType],
  );
  const navigate = useNavigate();
  const scrollToInquiry = (type: string) =>
    navigate("/contact-us?property=" + encodeURIComponent(type));
  return (
    <section className="homes-section section-wrap" id="homes">
      <div className="section-heading homes-heading">
        <div>
          <span className="eyebrow">A HOME THAT FITS</span>
          <h2>
            Make room for <em>what matters.</em>
          </h2>
        </div>
        <p>
          From easy, everyday living to a little more space to grow—find the right home at Alcove.
        </p>
      </div>
      <div className="home-filter-bar">
        <p>
          <span className="result-count">0{visibleHomes.length}</span> thoughtfully considered
          residences
        </p>
        <div className="filter-control">
          <span>Showing</span>
          <select
            aria-label="Filter listed homes"
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
          >
            <option>All residences</option>
            {homes.map((home) => (
              <option key={home.type}>{home.type}</option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" size={14} />
        </div>
      </div>
      <div className="homes-grid">
        {visibleHomes.map((home, index) => (
          <article
            aria-label={home.type}
            className={`home-card${index === 0 ? " home-card-featured" : ""}`}
            key={home.type}
          >
            <div className="home-image-wrap">
              <Link to={"/property/" + home.slug + "/"}>
                <img src={home.image} alt={home.imageAlt} loading="lazy" />
              </Link>
              <span className="home-tag">{home.tag}</span>
              <button
                className={`save-home${savedHomes.includes(home.type) ? " is-saved" : ""}`}
                aria-label={`Save ${home.name}`}
                aria-pressed={savedHomes.includes(home.type)}
                title={`Save ${home.name}`}
                onClick={() =>
                  setSavedHomes((saved) =>
                    saved.includes(home.type)
                      ? saved.filter((type) => type !== home.type)
                      : [...saved, home.type],
                  )
                }
              >
                <Heart aria-hidden="true" size={18} />
              </button>
              {index === 0 && <span className="image-index">01 / 04</span>}
            </div>
            <div className="home-card-body">
              <div className="home-card-title">
                <div>
                  <span className="home-kicker">{home.name}</span>
                  <h3>
                    <Link to={"/property/" + home.slug + "/"}>{home.type}</Link>
                  </h3>
                </div>
                <Link to={"/property/" + home.slug + "/"} aria-label={"View " + home.type}>
                  <ArrowUpRight className="card-arrow" aria-hidden="true" size={20} />
                </Link>
              </div>
              <div className="home-detail-row">
                <span>
                  <BedDouble aria-hidden="true" size={15} />{" "}
                  {home.type.startsWith("4") ? "4 bedrooms" : "3 bedrooms"}
                </span>
                <span>
                  <Ruler aria-hidden="true" size={15} /> {home.details}
                </span>
              </div>
              <div className="home-price-row">
                <p>
                  {home.price ? (
                    <>
                      From <strong>₦{home.price} million</strong>
                    </>
                  ) : (
                    <strong>Price on enquiry</strong>
                  )}
                </p>
                <Button
                  variant="link"
                  className="home-enquire"
                  onClick={() => scrollToInquiry(home.type)}
                >
                  Enquire <ArrowRight aria-hidden="true" size={15} />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {visibleHomes.length === 0 && (
        <p className="empty-results">Choose a residence to see what’s available.</p>
      )}
    </section>
  );
}
