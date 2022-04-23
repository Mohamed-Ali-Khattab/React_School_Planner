import React from "react";
import "../../style.css";

import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a className="brand-link">
        <img
          src="dist/img/imag.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Admin Interface</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
            <div className="mt-2"></div>

            <div className="mt-2"></div>

            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon far fa-calendar-alt" />
                <p>
                  Emploi du temps Interactif
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/emploi" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Editer Emplois</p>
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Voir emplois </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Imprimer emplois </p>
                  </a>
                </li>
              </ul>
            </li>

            <div className="mt-2"></div>
            <li className="nav-item">
              <Link to="/prof" className="nav-link">
                <i className="nav-icon fas fa-user-tie"></i>
                <p>Enseignant</p>
              </Link>
            </li>
            <div className="mt-2"></div>
            <li className="nav-item">
              <Link to="/classe" className="nav-link">
                <i className="nav-icon fas fa-door-open" />
                <p>Classe</p>
              </Link>
            </li>

            <div className="mt-2"></div>
            <li className="nav-item">
              <Link to="/salle" className="nav-link">
                <i className="nav-icon fas fa-door-open" />
                <p>Salle</p>
              </Link>
            </li>
            <div className="mt-2"></div>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-id-card" />
                <p>Inscription</p>
              </a>
            </li>
            {/* <div className="mt-2"></div>
                  <li className="nav-item">
                    <a href="pages/widgets.html" className="nav-link">
                      <i className="nav-icon fas fa-book"></i>
                      <p>Matière</p>
                    </a>
                  </li> */}
            <div className="mt-2"></div>
            <li className="nav-item">
              <Link to="/agenda" className="nav-link">
                <i className="nav-icon fas fa-calendar-day"></i>
                <p>Agenda</p>
              </Link>
            </li>
            <div className="mt-2"></div>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-pen"></i>
                <p>Notes</p>
              </a>
            </li>
            <div className="mt-2"></div>
            <hr class="font" />
            <li className="nav-item">
              <a href="http://easyschool.com.tn/" className="nav-link">
                <i className="nav-icon fas fa-school"></i>
                <p>Our School</p>
              </a>
            </li>
            <hr />
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default SideBar;
