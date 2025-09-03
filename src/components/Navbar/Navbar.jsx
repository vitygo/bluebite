import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const scrollToMenu = () => {
    navigate("/"); // йдемо на головну
    setTimeout(() => {
      const menuSection = document.getElementById("menu");
      if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
    }, 50); // невелика пауза, поки DOM завантажиться
  };

  const scrollToPromocje = () => {
    navigate("/"); // йдемо на головну
    setTimeout(() => {
      const menuSection = document.getElementById("promocje");
      if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
    }, 50); // невелика пауза, поки DOM завантажиться
  };

  const scrollToMap = () => {
    navigate("/"); // йдемо на головну
    setTimeout(() => {
      const menuSection = document.getElementById("map");
      if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
    }, 50); // невелика пауза, поки DOM завантажиться
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__brand">
          <img
            src="/bblogo.png"
            alt="blue bite logo"
            className="header__logo-img"
            onClick={() => navigate("/")} // клік по логотипу на головну
            style={{ cursor: "pointer" }}
          />
        </div>
        <nav className="nav">
          <a className="nav__link" onClick={scrollToMenu}>
            Menu
          </a>
          <a href="#" className="nav__link" onClick={scrollToPromocje}>Promocje</a>
          <a href="#" className="nav__link">Dostawa</a>
          <a href="#" className="button button--primary" onClick={scrollToMap}>Zobacz na mapie</a>
          <span className="nav__lang">PL</span>
          <button className="nav__toggle" />
        </nav>
      </div>
    </header>
  );
}
