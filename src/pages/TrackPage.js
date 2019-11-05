import React, { useState } from "react";
import TrackingCard from "../components/TrackingCard";
import "../scss/Track.scss";

export default function TrackPage() {
  const [trackingNumbers, setTrackingNumbers] = useState("");
  
  const splitTrackingNumbers = trackingNumbers
    .split(/\r?\n/)
    .map(st => st.trim())
    .filter(st => st !== "");
  
  const trackingCards = splitTrackingNumbers.map(st => (
    <TrackingCard {... getTrackingCardProps(st)}/>
  ));

  return (
    <React.Fragment>
      <h1>track any package</h1>
      <textarea
        className="tracking-number__input"
        type="text"
        value={trackingNumbers}
        onChange={e => setTrackingNumbers(e.target.value)}
      />
      <div>{trackingCards}</div>
    </React.Fragment>
  );
}

function getTrackingCardProps(trackingNumber) {

  return {number: trackingNumber, carrier: "fedex"};
}
