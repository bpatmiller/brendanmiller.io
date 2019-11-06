import React from "react";
import { Link } from "react-router-dom";

import "../scss/404.scss";

export default function TestPage(props) {
  var currentLocation = props.location.pathname;

  return (
    <div className="Page404">
      <div className="Grid404">
      <div className="Block404">
      404<br/>
      <span className="Hilight404">{currentLocation}</span> not found
      <br/><br/>
      return <Link to="/">home</Link>
      </div>
      </div>
    </div>
  );
}
