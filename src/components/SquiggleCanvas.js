import React from "react";
import "../scss/draw.scss";

export default function SquiggleCanvas(props) {
//   const [path, appendPath] = useState([]);

  return (
    <div className="squiggleCanvas">
      <svg>
        <path stroke="black" d="M 0 0 L 200 100 M 200 100 L 200 300" />
      </svg>
    </div>
  );
}
