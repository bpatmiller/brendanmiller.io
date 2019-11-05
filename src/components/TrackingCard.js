import React from "react";
import "../scss/Track.scss";

export default function TrackingCard(props) {
  return <div style={{ border: "1px blue solid" }}>{props.number} {props.carrier}</div>;
}