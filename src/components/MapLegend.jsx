import React, { useState } from "react";

export default function MapLegend({ categories }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`map-legend${expanded ? " is-expanded" : ""}`} aria-label="Map legend">
      <button
        type="button"
        className="map-legend__toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        <span>Legend</span>
        <span className="map-legend__chevron" aria-hidden="true" />
      </button>
      <div className="map-legend__collapse" aria-hidden={!expanded}>
        <ul className="map-legend__items">
          {categories.map((category) => (
            <li className="map-legend__item" key={category.id}>
              <span className={`map-legend__symbol ${category.markerClass}`} aria-hidden="true" />
              <span>{category.legendLabel}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}