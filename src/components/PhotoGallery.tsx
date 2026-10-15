import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { photos as defaultPhotos } from "@/data/property";
export function PhotoGallery({
  photos = defaultPhotos,
}: {
  photos?: { src: string; alt: string }[];
}) {
  const [activePhoto, setActivePhoto] = useState(0);
  const photo = photos[activePhoto]!;
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <div>
          <span className="eyebrow">A CLOSER LOOK</span>
          <h2 id="gallery-title">
            See yourself <em>here.</em>
          </h2>
        </div>
        <div className="gallery-controls">
          <span>
            {String(activePhoto + 1).padStart(2, "0")} <i>/</i>{" "}
            {String(photos.length).padStart(2, "0")}
          </span>
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous photo"
            onClick={() => setActivePhoto((activePhoto + photos.length - 1) % photos.length)}
          >
            <ArrowRight className="gallery-prev" size={17} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next photo"
            onClick={() => setActivePhoto((activePhoto + 1) % photos.length)}
          >
            <ArrowRight size={17} />
          </Button>
        </div>
      </div>
      <div className="gallery-main">
        <img src={photo.src} alt={photo.alt} loading="lazy" />
        <span className="gallery-caption">
          ALCOVE HOMES <i>—</i> YABA, LAGOS
        </span>
      </div>
      <div className="gallery-thumbnails">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            aria-label={`Show photo ${index + 1}`}
            aria-pressed={activePhoto === index}
            className={activePhoto === index ? "thumbnail-active" : ""}
            onClick={() => setActivePhoto(index)}
          >
            <img src={photo.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
}
