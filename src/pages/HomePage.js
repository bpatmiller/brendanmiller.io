import React from "react";
import NavBar from "../components/NavBar";
import ContentGrid from "../components/ContentGrid";

export default function HomePage() {
  const gridProps = {items: ['track', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6']};

  return (
    <React.Fragment>
      <NavBar />
      <ContentGrid {...gridProps}/>
    </React.Fragment>
  );
}
