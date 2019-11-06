import React, { Component } from "react";
import ColorBar from "./ColorBar.js";

import "../scss/NavBar.scss";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar-wrapper">
        <span className="navBar-col navBar-left">
          <span className="navBar-span">brendan<br/>miller</span>
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
          <span className="navBar-span">right align</span>
        </span>
      </div>
    );
  }
}
