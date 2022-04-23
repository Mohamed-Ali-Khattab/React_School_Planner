
import React, { useState , Component} from 'react'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import {Link} from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "react-datepicker/dist/react-datepicker.css";
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];
function Agenda( ) {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }
    return ( 
        <div className="App">
            
                    {/* /.menu */}
                   <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a  className="brand-link">
      <img src="dist/img/imag.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Admin Interface</span>
    </a>
       {/* Sidebar */}
       <div className="sidebar">
      {/* Sidebar user panel (optional) */}
     
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
            <div className="mt-2"></div>
            
          <div className="mt-2"></div>

          <li className="nav-item">
            <a  className="nav-link">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Emploi du temps Interactif
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">

              <li className="nav-item">
                <Link to="/emploi"  className="nav-link" >
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
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-user-tie"></i>
              <p>
              Enseignant
              </p>
            </a>
          </li>
          <div className="mt-2"></div>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-door-open" />
              <p>
                Classe
              </p>
            </a>
          </li>
          <div className="mt-2"></div>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-book"></i>
              <p>
                Matière
              </p>
            </a>
          </li>
          <div className="mt-2"></div>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-door-open" />
              <p>
               Salle
              </p>
            </a>
          </li>
          <div className="mt-2"></div>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              
            <i className="nav-icon fas fa-id-card" />
              <p>
               Inscription
              </p>
            </a>
          </li>
          <div className="mt-2"></div>
          <li className="nav-item">
            <Link to='/agenda' className="nav-link">
              
              <i className="nav-icon fas fa-calendar-day"></i>
              <p>
               Agenda
              </p>
            </Link>
          </li>
          <div className="mt-2"></div>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-pen"></i>
              <p>
              Notes
              </p>
            </a>
          </li>
          <div className="mt-2"></div>
          <hr class='font' />
          <li className="nav-item">
            <a href="http://easyschool.com.tn/" className="nav-link">
              <i className="nav-icon fas fa-school"></i>
              <p>Our School</p>
            </a>
          </li>
          <hr/>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>
{/* /.header */}

<div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">
          Home
         </Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Contact</a>
      </li>
    </ul>
    {/* SEARCH FORM */}
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
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
                <h3 className="dropdown-item-title">
                  Settings
                </h3>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Log Out
                </h3>
              </div>
            </div>
            {/* Message End */}
          </a>
        </div>
      </li>
    </ul>
  </nav>
</div>




  <div>
  <footer className="main-footer">
    <strong></strong>
.
  </footer>
</div>
  
</div>
        
   
               
            
    );
  }
  
  export default Agenda;
  