import React from "react";
import "./MapSection.css";

export default function MapSection() {
  return (
    <section className="map">
      <div className="container">
        <div className="map__inner">
          <div className="map__info">
            <h2 className="map__title">BlueBite Kebab</h2>
            <p className="map__address">al. Pokoju 1, Kraków</p>
            <p className="map__hours">Pn-Cz: 10:00 – 22:00</p>
            <p className="map__hours">Pt-Sob: 10:00 – 23:00</p>
            <p className="map__hours">N: 11:00 – 22:00</p>
            <a style={{width: "300px"}}className="button button--primary" href="#menu">Zamów na miejscu</a>
          </div>
          <div className="map__embed">
            <iframe
              title="Mapa"
              className="map__iframe"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.8460134906147!2d19.95921951571704!3d50.061947822285214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b08c21dfcd7%3A0x9df6810c92fafd1a!2sal.%20Pokoju%201%2C%2031-548%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1692956789012!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


