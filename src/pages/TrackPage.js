import React, { useState } from "react";
import TrackingCard from "../components/TrackingCard";
import "../scss/Track.scss";

export default function TrackPage() {
  const [trackingNumbers, setTrackingNumbers] = useState("");
  const splitTrackingNumbers = trackingNumbers
    .split(/\r?\n/)
    .map(st => st.trim())
    .filter(st => st !== "");
  console.log(splitTrackingNumbers);
  const trackingCards = splitTrackingNumbers.map(st => (
    <TrackingCard number={st} carrier="fedex"/>
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
