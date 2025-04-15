import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    const { isFixed = true } = this.props; // default true
    return (
      <footer className={`bg-dark text-center text-white ${isFixed ? "footer-fixed" : "aboutFooter"} width100`}>
        <section>
          <NavLink
            className="btn rounded-circle text-primary btn-outline-light btn-floating m-2"
            to="https://www.facebook.com/ayush.rathi.9404"
            target="_blank"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </NavLink>
          <NavLink
            className="btn rounded-circle btn-outline-light btn-floating m-2"
            style={{ color: "#e91cb2" }}
            to="https://www.instagram.com/theayushrathi"
            target="_blank"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </NavLink>
          <NavLink
            className="btn rounded-circle text-primary btn-outline-light btn-floating m-2"
            to="https://x.com/Ayush14062003"
            target="_blank"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </NavLink>
          <NavLink
            className="btn rounded-circle btn-outline-light btn-floating m-2"
            to="https://github.com/ayush-5858"
            target="_blank"
            role="button"
          >
            <i className="fab fa-github"></i>
          </NavLink>
          <NavLink
            className="btn rounded-circle text-primary btn-outline-light btn-floating m-2"
            to="https://www.linkedin.com/in/ayush-rathi-945584225"
            target="_blank"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </NavLink>
        </section>
        <div className="text-center">
          © 2025 NewsIndia | All Right Reserved | Design and Maintained by Ayush Rathi
        </div>
      </footer>
    );
  }
}
