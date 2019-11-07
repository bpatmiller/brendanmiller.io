import React from "react";
import HoverLink from "../components/HoverLink";

import "../scss/App.scss";
import "../scss/404.scss";

export default function TestPage(props) {
  const currentLocation = props.location.pathname;
  const hoverLinkProps = {link: "/", content: "home"};

  return (
    <div className="Page404">
      <div className="Grid404">
      <div className="Block404">
      404<br/>
      <span className="Hilight404">{currentLocation}</span> not found
      <br/><br/>
      return <HoverLink {...hoverLinkProps}></HoverLink>
      </div>
      </div>
    </div>
  );
}
