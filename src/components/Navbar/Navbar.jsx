import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__brand">
          <img src="/bblogo.png" alt="Papa Johns" className="header__logo-img" />
        </div>
        <nav className="nav">
          <a href="#" className="nav__link">Menu</a>
          <a href="#" className="nav__link">Promocje</a>
          <a href="#" className="nav__link">Dostawa</a>
          <a href="#" className="button button--primary">ZAMOW TERAZ
          </a>
          <span className="nav__lang">PL</span>
          <button className="nav__toggle" />
        </nav>
      </div>
    </header>
  );
}
