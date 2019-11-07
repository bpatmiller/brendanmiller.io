import React from "react";
import { useHover } from "./UseHover";
import { useSpring, animated } from "react-spring";
import { useMousePosition } from "./UseMousePosition";
import { Link } from "react-router-dom";

import "../scss/ContentGrid.scss";
import colors from "../scss/colors.scss";

export default function ContentGridPanel(props) {
  const [hoverRef, isHovered] = useHover();
  const mousePosition = useMousePosition();

  const springProps = useSpring({
    config: { friction: isHovered ? 26 : 12 },
    to: {
      transform: isHovered
        ? getTranslation(hoverRef, isHovered, mousePosition)
        : "translate(0px, 0px)",
      color: isHovered ? colors.foreground01 : colors.foreground00
    }
  });

  const wrapperSpringProps = useSpring({
    to: {
      transform: isHovered ? "scale(1.15)" : "scale(1)"
    }
  });

  var myImg;
  try {
    myImg = require(`../imgs/${props.img}`);
  } catch (e) {
    myImg = require("../imgs/example.png");
  }

  return (
    <div className="flex-item">
      <div className="item-wrapper">
        <animated.div
          className="item-backdrop"
          style={wrapperSpringProps}
        ></animated.div>
        <Link to={props.link}>
          <animated.div
            className="item-content"
            style={springProps}
            ref={hoverRef}
          >
            <img className="item-img" src={myImg} alt="example img" />
            <div className="item-sidetext">{props.sidetext}</div>
            <div className="item-subtext">{props.subtext}</div>
          </animated.div>
        </Link>
      </div>
    </div>
  );
}

function getTranslation(hoverRef, isHovered, mousePosition) {
  const node = hoverRef.current;
  if (!node || !isHovered) {
    return "translate(0px,0px)";
  }
  const bbRect = node.getBoundingClientRect();
  const centerPosition = {
    x: (bbRect.right + bbRect.left) / 2,
    y: (bbRect.top + bbRect.bottom) / 2
  };
  const displacement = {
    x: (mousePosition.x - centerPosition.x) / 20,
    y: (mousePosition.y - centerPosition.y) / 20
  };
  const translationString =
    "translate(" +
    displacement.x.toString() +
    "px," +
    displacement.y.toString() +
    "px)";

  return translationString;
}
