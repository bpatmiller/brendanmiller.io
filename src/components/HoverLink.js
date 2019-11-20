import React from "react";
import { Link } from "react-router-dom";
import "../scss/HoverLink.scss";

// import colors from "../scss/colors.scss";

export default function HoverLink(props) {
  return (
    <span className="hoverLink">
      <Link to={props.link}>{props.content}</Link>
    </span>
  );
}
