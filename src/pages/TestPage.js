import React from "react";
import "../App.scss";
import HoveredText from "../components/HoveredText";

export default function TestPage() {
  const textString = "i <3 mira";

  return (
    <div className="page">
      <div style={{padding: "64px"}}>
        <HoveredText text={textString} />
      </div>
    </div>
  );
}
