import { Compass, ArrowUpRight } from "lucide-react";
export function NeighborhoodSection() {
  return (
    <section className="neighborhood" id="neighborhood">
      <div className="neighborhood-visual">
        <img
          src={"/images/alcove-townhomes.jpg"}
          alt="Alcove Homes tucked into the vibrant Yaba neighbourhood"
          loading="lazy"
        />
        <span className="visual-note">
          <Compass aria-hidden="true" size={16} /> Right where Lagos is going
        </span>
      </div>
      <div className="neighborhood-copy">
        <span className="eyebrow">MORE THAN AN ADDRESS</span>
        <h2>
          In the middle
          <br />
          of <em>what’s next.</em>
        </h2>
        <p>
          Yaba is where Lagos’ creative energy meets everyday ease. A neighbourhood of bold ideas,
          familiar places and new things around every corner.
        </p>
        <ul className="local-highlights">
          <li>
            <span>01</span>
            <div>
              <strong>A city in motion</strong>
              <small>Near Mobolaji Johnson train station and the Jibowu transport hub.</small>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Room to grow</strong>
              <small>
                Close to UNILAG, Queen’s College, Yaba Tech and some of Lagos’ brightest startups.
              </small>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Life, close by</strong>
              <small>Restaurants, shops and everyday essentials, all within reach.</small>
            </div>
          </li>
        </ul>
        <a
          className="text-link"
          href="https://www.google.com/maps/search/?api=1&query=19+Ishola+St%2C+Adekunle%2C+Yaba%2C+Lagos"
          target="_blank"
          rel="noreferrer"
        >
          Find us in Yaba <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </section>
  );
}
