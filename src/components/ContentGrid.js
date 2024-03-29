import React from "react";
import ContentGridPanel from "./ContentGridPanel";

import "../scss/ContentGrid.scss";

export default function ContentGrid(props) {
  const gridItems = props.items.map(x => (
    <ContentGridPanel
      title={x}
      link={x}
      subtext="bottom text"
      sidetext="side text"
      img={x+".png"}
    />
  ));

  return <div className="flex-container">{gridItems}</div>;
}
