import React from "react";
import { useHover } from "./UseHover";
import { useSpring, animated } from "react-spring";
import "../App.scss";

export default function HoveredText(props) {
    const [hoverRef, isHovered] = useHover();

    const springProps = useSpring({
        to: {
            color: isHovered ? "red" : "black",
          transform: isHovered ? "scale(2)" : "scale(1)"
        }
      });

  return (<animated.div style={springProps} ref={hoverRef}>{props.text}</animated.div>);
}
