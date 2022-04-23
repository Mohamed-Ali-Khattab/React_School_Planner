import React, { Component } from "react";
import "../style.css";
import "../tableau.css";
import { Link } from "react-router-dom";
import SideBar from "./pages/SideBar";
export default class Admin extends Component {
  render() {
    return (
      <div>
        {/* /.menu */}
        <SideBar />

        <div>
          <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#">
                  <i className="fas fa-bars" />
                </a>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            {/* SEARCH FORM */}
            <form className="form-inline ml-3">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
              {/* Messages Dropdown Menu */}
              <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                  <i className="fas fa-th-large" />
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <div className="media-body">
                        <h3 className="dropdown-item-title">Settings</h3>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    {/* Message Start */}
                    <div className="media">
                      <div className="media-body">
                        <h3 className="dropdown-item-title">Log Out</h3>
                      </div>
                    </div>
                    {/* Message End */}
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>150</h3>
                      <p>Elèves inscrit</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-users"></i>
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>70</h3>
                      <p>Garçon inscrit</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-user"></i>
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>80</h3>
                      <p>fille inscrit</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-user"></i>
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>7</h3>
                      <p>Classe au total</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                  </div>
                </div>
              </div>

              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <div href="pages/widgets.html" className="nav-link">
                    <div
                      class="alert alert-secondary"
                      role="alert"
                      style={{ width: "100%", height: "50px" }}
                    >
                      <i className="nav-icon fas fa-bell" />
                      10 DERNIERS ELEVES INSCRITS
                    </div>
                  </div>
                </li>
              </ul>
              <table class="table table-hover table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Nom </th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Sexe</th>
                    <th scope="col">date-naissance</th>
                    <th scope="col">Classe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Ahmed</td>
                    <td>Mahjoub</td>
                    <td>Homme</td>
                    <td>08-11-2006</td>
                    <td>1ère A</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Amin</td>
                    <td>Mahjoub</td>
                    <td>Homme</td>
                    <td>08-11-2006</td>
                    <td>1ère B</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>salah</td>
                    <td>bbk</td>
                    <td>Homme</td>
                    <td>08-11-2006</td>
                    <td>6ème C</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Ali</td>
                    <td>benahmed</td>
                    <td>Homme</td>
                    <td>08-10-2006</td>
                    <td>1ère C</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>marwa</td>
                    <td>ayed</td>
                    <td>femme</td>
                    <td>08-11-2004</td>
                    <td>1ère A</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Ahmed</td>
                    <td>Mahjoub</td>
                    <td>Homme</td>
                    <td>08-11-2008</td>
                    <td>2ème A</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>salma</td>
                    <td>salma</td>
                    <td>femme</td>
                    <td>08-11-2006</td>
                    <td>4ème A</td>
                  </tr>
                </tbody>
              </table>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
        </div>
        <div>
          <footer className="main-footer">
            <strong></strong>.
          </footer>
        </div>
      </div>
    );
  }
}
