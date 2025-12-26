import React from "react";
import "./Header.css";
import corazaLogo from "../assets/images/corazaLogo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
      <img src={corazaLogo} alt="Logo" />
      </div>
      <div>
      <nav className="header-nav">
        <ul>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Game Info</a></li>
          <li><a href="#">Heroes</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Media</a></li>
        </ul>
      </nav>
      </div>
      <div className="header-title">
        <h3>CdG</h3>
      </div>
    </header>
  );
}

