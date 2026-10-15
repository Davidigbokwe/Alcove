import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

export function PropertyVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="video-section section-wrap" aria-labelledby="video-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">WALK THROUGH ALCOVE</span>
          <h2 id="video-title">
            Home, in <em>motion.</em>
          </h2>
        </div>
        <p>Take a closer look at the development with the original Alcove Homes property film.</p>
      </div>
      <div className="property-video">
        {playing ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/asEaxavwK2E?autoplay=1"
            title="Alcove Homes property video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Play Alcove Homes property video"
          >
            <img src="/images/alcove-tower.jpg" alt="Alcove Homes exterior" loading="lazy" />
            <span>
              <Play size={27} aria-hidden="true" />
              Watch the property film
            </span>
          </button>
        )}
      </div>
      <a
        className="text-link"
        href="https://www.youtube.com/watch?v=asEaxavwK2E"
        target="_blank"
        rel="noreferrer"
      >
        Watch on YouTube <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}

export function LocationSection() {
  return (
    <section
      className="location-section section-wrap"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">FIND YOUR WAY HERE</span>
          <h2 id="location-title">
            Your corner of <em>Yaba.</em>
          </h2>
        </div>
        <p>
          Ishola Street, Yaba, Lagos. Set in Lagos’ technology hub, near schools, transport
          connections, restaurants and shops.
        </p>
      </div>
      <iframe
        className="location-map"
        title="Alcove Homes location on Ishola Street, Yaba, Lagos"
        src="https://maps.google.com/maps?q=Ishola%20Street%2C%20Yaba%2C%20Lagos%2C%20Nigeria&t=m&z=16&output=embed&iwloc=near"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        className="text-link"
        href="https://www.google.com/maps/search/?api=1&query=19+Ishola+St%2C+Adekunle%2C+Yaba%2C+Lagos"
        target="_blank"
        rel="noreferrer"
      >
        Get directions <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
