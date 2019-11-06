import React from "react";
import SquiggleCanvas from "../components/SquiggleCanvas";
import NavBar from "../components/NavBar";

export default function DrawPage() {
  return (
    <React.Fragment>
      <NavBar />
        here is a canvas
      <SquiggleCanvas />
    </React.Fragment>
  );
}
