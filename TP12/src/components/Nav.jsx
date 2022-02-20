import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuLink from "./MenuLink";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <h2>
            Exotic <em>Cars</em>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <MenuLink to="/" label="Home"/>
            <MenuLink to="/catalogo" label="Catalogo"/>
            <MenuLink to="/info" label="Sobre Nosotros"/>
            <MenuLink to="/contacto" label="Contactanos"/>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
