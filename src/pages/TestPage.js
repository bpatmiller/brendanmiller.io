import React from "react";
import HoveredText from "../components/HoveredText";

export default function TestPage() {
  const textString = "aSA8MyBtaXJh";

  return (
    <React.Fragment>
      <div style={{ maxWidth: "600px", padding: "64px", margin: "auto" }}>
        <HoveredText text={atob(textString)} />
      </div>
    </React.Fragment>
  );
}
