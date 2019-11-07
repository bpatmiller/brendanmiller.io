import React from "react";
import { useSpring, animated } from "react-spring";
import { useHover } from "./UseHover";
import {Link} from "react-router-dom";
import "../scss/HoverLink.scss";

import colors from "../scss/colors.scss";


export default function HoverLink(props) {
  const [hoverRef, isHovered] = useHover();

  const hoverProps = useSpring({
    to: {
    //   backgroundColor: isHovered ? colors.background01 : colors.background02,
    //   color: isHovered ? colors.background02 :colors.background01,
    //   borderColor: colors.background01,
    }
  });

  return (
    <animated.span className="hoverLink" ref={hoverRef} style={hoverProps}>
      <Link to={props.link}>{props.content}</Link>
    </animated.span>
  );
}
