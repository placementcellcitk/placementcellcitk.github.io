import React from "react";
import { NavLink, Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import brochurePdf from "../assets/CITK Placement Brochure 2023-24.pdf";
import cit from "../assets/images/cit.png";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <ToggleButton click={props.sideDrawerToggler} />
      </div>
      <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
        <div className="logo">
          <img src={cit} alt=" " className="logo-image" />
          Placement Cell CITK
        </div>
      </Link>
      <div className="spacer" />
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/home" exact className="activeclass">
              Home
            </NavLink>
          </li>

          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Academics </span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink to="/courses" exact className="activeclass">
                Courses
              </NavLink>
              <NavLink to="/demographics" exact className="activeclass">
                Demographics
              </NavLink>
              <NavLink to="/mou" exact className="activeclass">
                MOU's
              </NavLink>
              <NavLink to="/techclubs" exact className="activeclass">
                Technical Clubs
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/our-recruiters" exact className="activeclass">
              Our Recruiters
            </NavLink>
          </li>

          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Why Us </span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink to="/WhyCitk" exact className="activeclass">
                Why CITK
              </NavLink>
              <NavLink to="/alumni-speaks" exact className="activeclass">
                Our Alumni
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/procedure-and-policies" exact className="activeclass">
              Procedure
            </NavLink>
          </li>

          <li>
            <a href={brochurePdf} className="activeclass" target="blank">
              Brochure
            </a>
          </li>

          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Contact Us</span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink to="/contact-us" exact className="activeclass">
                Our Team
              </NavLink>
              <NavLink to="/howToReach" exact className="activeclass">
                How to Reach
              </NavLink>
              <NavLink to="/Facilities" exact className="activeclass">
                Facilities
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
