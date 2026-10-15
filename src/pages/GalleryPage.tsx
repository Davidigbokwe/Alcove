import { useState } from "react";
import { Link } from "react-router-dom";
import assets from "@/data/original-assets.json";
import { PageIntro } from "@/components/PageIntro";
import { PropertyVideo } from "@/components/PropertyMedia";
export default function GalleryPage() {
  const [category, setCategory] = useState("All photos");
  const photos = assets.gallery.filter(
    (photo) => category === "All photos" || photo.category === category,
  );
  return (
    <>
      <PageIntro
        title="The gallery"
        eyebrow="A CLOSER LOOK AT ALCOVE"
        text="Explore the original exterior, interior and facility photographs. Open any image to see it in full."
      />
      <section className="gallery-page section-wrap">
        <div className="gallery-filters" role="group" aria-label="Photo categories">
          {["All photos", "Exterior", "Interior", "Facilities"].map((item) => (
            <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
        <p className="plan-note" role="status">
          {photos.length} photographs
        </p>
        <div className="gallery-photo-grid">
          {photos.map((photo) => (
            <a
              key={photo.src}
              href={photo.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span>{photo.category}</span>
            </a>
          ))}
        </div>
        <Link className="page-button" to="/contact-us/">
          Schedule a tour →
        </Link>
      </section>
      <PropertyVideo />
    </>
  );
}
