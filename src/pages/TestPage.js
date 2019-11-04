import React from "react";
import "../App.scss";
import HoveredText from "../components/HoveredText";

export default function TestPage() {
  const textString = "aSA8MyBtaXJh";

  return (
    <div className="page">
      <div style={{ maxWidth: "600px", padding: "64px", margin: "auto" }}>
        <HoveredText text={atob(textString)} />
      </div>
    </div>
  );
}
