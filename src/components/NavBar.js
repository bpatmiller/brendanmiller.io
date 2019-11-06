import React, { Component } from "react";
import ColorBar from "./ColorBar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../scss/NavBar.scss";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar-wrapper">
        <span className="navBar-col navBar-left">
          <span className="navBar-span">
            brendan
            <br />
            miller
          </span>
          <span className="navBar-span">
            <ColorBar />
          </span>
          <span className="navBar-span">
            software engineer
            <br />
            graphics / machine learning / physical simulation / fractals
          </span>
        </span>
        <span className="navBar-col navBar-right">
          <span className="navBar-span">
            <a href="http://www.github.com/bpatmiller" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/bpatmiller/" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </span>
      </div>
    );
  }
}
