import React from "react";
import "../App.scss";
import NavBar from "../components/NavBar";
import ContentGrid from "../components/ContentGrid";

export default function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <ContentGrid />
    </div>
  );
}
