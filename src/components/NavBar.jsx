import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm.trim().replace(/\s+/g, " "));
    this.setState({ searchTerm: "" });
  };

  closeNavbar = () => {
    const navbarToggler = document.getElementById("navbarTogglerDemo02");
    if (navbarToggler && navbarToggler.classList.contains("show")) {
      new window.bootstrap.Collapse(navbarToggler, {
        toggle: true,
      });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-danger" to="/">
              NewsIndia
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav flex-row flex-wrap me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/" onClick={this.closeNavbar}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/business" onClick={this.closeNavbar}>
                    Business
                  </NavLink>
                </li>
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/entertainment" onClick={this.closeNavbar}>
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/health" onClick={this.closeNavbar}>
                    Health
                  </NavLink>
                </li>
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/science" onClick={this.closeNavbar}>
                    Science
                  </NavLink>
                </li>
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/sports" onClick={this.closeNavbar}>
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/technology" onClick={this.closeNavbar}>
                    Technology
                  </NavLink>
                </li>
                <li className="nav-item mx-2 mx-lg-0">
                  <NavLink className="nav-link" to="/about" onClick={this.closeNavbar}>
                    About Us
                  </NavLink>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={this.handleSubmit}
                style={{padding: "0px 7px"}}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
                <button className="btn btn-outline-danger" type="submit" onClick={this.closeNavbar}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
