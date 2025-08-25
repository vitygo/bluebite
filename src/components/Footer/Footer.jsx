import React from "react";
import { Facebook, Instagram, Twitter, Github, Dribbble, } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <img src="/bblogo.png" alt="Logo" className="footer__logo-img" />
            </a>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3 className="footer__title">O nas</h3>
              <ul className="footer__list">
                <li><a href="#" className="footer__link">BlueBite Kraków</a></li>
                <li><a href="#" className="footer__link">al. Pokoju 1, Kraków</a></li>
                <li><a href="#" className="footer__link"> 790 884 802</a></li>
               
              </ul>
            </div>
            <div className="footer__column">
              <h3 className="footer__title">Social</h3>
              <ul className="footer__list">
                <li><a href="#" className="footer__link">Instagram</a></li>
                <li><a href="#" className="footer__link">Facebook</a></li>
                <li><a href="#" className="footer__link">Tiktok</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h3 className="footer__title">Info</h3>
              <ul className="footer__list">
                <li><a href="#" className="footer__link">Polityka</a></li>
                <li><a href="#" className="footer__link">Regulamin</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <span className="footer__copyright">© {new Date().getFullYear()} BlueBite. All rights.</span>
          <div className="footer__social">
            <a href="#" className="footer__social-link"><Facebook size={20} /></a>
            <a href="#" className="footer__social-link"><Instagram size={20} /></a>
            <a href="#" className="footer__social-link"><FaTiktok size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}


