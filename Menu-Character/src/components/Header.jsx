import React from "react";
import "./Header.css";
import corazaLogo from "../assets/corazaLogo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
      <img src="{corazaLogo}" alt="Logo" />
      </div>
      <div className="header-title">
        <h3>Coraza de Guerra</h3>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Personajes</a></li>
          <li><a href="#">Historia</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;