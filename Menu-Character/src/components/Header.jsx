import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Coraza de Guerra</h1>
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