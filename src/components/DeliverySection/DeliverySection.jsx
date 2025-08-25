import React from "react";
import "./DeliverySection.css";

export default function DeliverySection() {
  return (
    <section className="delivery">
      <div className="container">
        <div className="delivery__inner">
          <div className="delivery__info">
            <h2 className="delivery__title">Zamów z dostawą lub odbiorem</h2>
            <p className="delivery__sub">Wybierz platformę lub zadzwoń do nas</p>
            <div className="delivery__actions">
              <a className="delivery__btn delivery__btn--glovo" href="https://glovoapp.com" target="_blank" rel="noreferrer">Glovo</a>
              <a className="delivery__btn delivery__btn--pyszne" href="https://www.pyszne.pl" target="_blank" rel="noreferrer">Pyszne.pl</a>
              <a className="delivery__btn delivery__btn--uber" href="https://www.ubereats.com" target="_blank" rel="noreferrer">Uber Eats</a>
              <a className="delivery__btn delivery__btn--call" href="tel:+48123456789">Zadzwoń: +48 123 456 789</a>
            </div>
          </div>
          <div className="delivery__pickup">
            <div className="delivery__card">
              <h3 className="delivery__pickup-title">Odbiór w restauracji</h3>
              <p className="delivery__pickup-desc">Zamów telefonicznie i odbierz bez kolejki w BlueBite.</p>
              <a className="button button--primary" href="#menu">Przejdź do menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


