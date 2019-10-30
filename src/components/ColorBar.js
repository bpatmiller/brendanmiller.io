import React from "react";

import "./colorbar.scss"
import colors from "./colors.scss";

export default function ColorBar(props) { 
    const colorBlocks = Object.entries(colors).map( (key, val) => 
    <div className="colorbar-block" style={{backgroundColor: key[1]}}></div>);
   
    return (
        <div className="colorbar-container">
           {colorBlocks}
        </div>
    );
}
