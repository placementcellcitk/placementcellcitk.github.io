import React from "react";
import { NavLink, Link } from "react-router-dom";
import brochurePdf from "../assets/CITK Placement Brochure 2023-24.pdf";

class SideDrawer extends React.Component {
  state = {
    showDropDownAcademics: false,
    showDropdownStatistics: false,
  };
  handleDropDownAcademics = () => {
    this.setState((cs) => ({
      showDropDownAcademics: !cs.showDropDownAcademics,
      showDropdownStatistics: false,
    }));
  };
  handleDropDownWhyUs = () => {
    this.setState((cs) => ({
      showDropDownWhyUs: !cs.showDropDownWhyUs,
      showDropdownWhyUs: false,
    }));
  };
  handleDropDownContactUs = () => {
    this.setState((cs) => ({
      showDropDownContactUs: !cs.showDropDownContactUs,
      showDropdownContactUs: false,
    }));
  };
  handleDropdownStatistics = () => {
    this.setState((cs) => ({
      showDropdownStatistics: !cs.showDropdownStatistics,
      showDropDownAcademics: false,
    }));
  };
  render() {
    let drawerClass = "side-drawer";
    if (this.props.show) drawerClass = "side-drawer open";
    return (
      <div className={drawerClass}>
        <div className="side">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <span onClick={this.props.click} className="sidebar-logo-text">
              Placement Cell CITK
            </span>
          </Link>
          <span className="cross-btn" onClick={this.props.click}>
            <i className="fas fa-times fa-2x" />
          </span>
        </div>

        <ul>
          <li onClick={this.props.click}>
            <NavLink to="/home" exact className="activeclass">
              Home
            </NavLink>
          </li>
          <li className="activeclass" onClick={this.handleDropDownAcademics}>
            Academics <i className="fa fa-caret-down" />
          </li>
          {this.state.showDropDownAcademics ? (
            <ul className="drp-down">
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/courses" exact className="activeclass">
                  Courses
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/demographics" exact className="activeclass">
                  Demographics
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/mou" exact className="activeclass">
                  MOU's
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownAcademics)}
                className="activeclass"
              >
                <NavLink to="/techclubs" exact className="activeclass">
                  Technical Clubs
                </NavLink>
              </li>
            </ul>
          ) : null}

          <li onClick={this.props.click}>
            <NavLink to="/our-recruiters" exact className="activeclass">
              Our Recruiters
            </NavLink>
          </li>

          <li className="activeclass" onClick={this.handleDropDownWhyUs}>
            Why Us <i className="fa fa-caret-down" />
          </li>
          {this.state.showDropDownWhyUs ? (
            <ul className="drp-down">
              <li
                onClick={() => this.props.click(this.handleDropDownWhyUs)}
                className="activeclass"
              >
                <NavLink to="/WhyCitk" exact className="activeclass">
                  Why CITK
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownWhyUs)}
                className="activeclass"
              >
                <NavLink to="/alumni-speaks" exact className="activeclass">
                  Our Alumni
                </NavLink>
              </li>
            </ul>
          ) : null}

          <li onClick={this.props.click}>
            <NavLink to="/procedure-and-policies" exact className="activeclass">
              Procedure
            </NavLink>
          </li>

          <li onClick={this.props.click}>
            <a href={brochurePdf} className="activeclass" target="blank">
              Brochure
            </a>
          </li>

          <li className="activeclass" onClick={this.handleDropDownContactUs}>
            Contact Us
            <i className="fa fa-caret-down" />
          </li>
          {this.state.showDropDownContactUs ? (
            <ul className="drp-down">
              <li
                onClick={() => this.props.click(this.handleDropDownContactUs)}
                className="activeclass"
              >
                <NavLink to="/Contact-us" exact className="activeclass">
                  Our Team
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownContactUs)}
                className="activeclass"
              >
                <NavLink to="/howToReach" exact className="activeclass">
                  How to Reach Us
                </NavLink>
              </li>
              <li
                onClick={() => this.props.click(this.handleDropDownContactUs)}
                className="activeclass"
              >
                <NavLink to="/Facilities" exact className="activeclass">
                  Facilities
                </NavLink>
              </li>
            </ul>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
