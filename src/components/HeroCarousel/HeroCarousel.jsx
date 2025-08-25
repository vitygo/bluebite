import React from "react";
import { Truck } from "lucide-react";
import "./HeroCarousel.css";
export default function HeroCarousel() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__notice">
          <div className="hero__notice-left">
            <Truck className="hero__notice-icon" />
            <div className="hero__notice-texts">
              <h3 className="hero__notice-title">Zamów online lub zjedz na miejscu</h3>
              <p className="hero__notice-sub">Szybka dostawa i zawsze świeży kebab</p>
            </div>
          </div>
          <div className="hero__notice-actions">
            <a href="#menu" className="button button--primary">Zamów teraz</a>
            <div className="hero__partners">
              <a className="hero__partner" href="https://glovoapp.com" target="_blank" rel="noreferrer">Glovo</a>
              <a className="hero__partner" href="https://www.pyszne.pl" target="_blank" rel="noreferrer">Pyszne.pl</a>
              <a className="hero__partner" href="https://www.ubereats.com" target="_blank" rel="noreferrer">Uber Eats</a>
            </div>
          </div>
        </div>

        <div className="hero__wrap">
          <div className="hero__content">
            <span className="hero__badge">Nowość</span>
            <h1 className="hero__headline">Soczysty kebab, wypiekane pity, świeże dodatki</h1>
            <p className="hero__sub">Zamów z dostawą lub odwiedź nas i zjedz na miejscu</p>
            <div className="hero__cta">
              <a href="#menu" className="button button--primary">Przejdź do menu</a>
            </div>
          </div>
          <div className="hero__media">
        
          </div>
        </div>
      </div>
    </section>
  );
}
