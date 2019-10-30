import React, { useState } from "react";
import { useHover } from "./UseHover";
import { useSpring, animated } from "react-spring";
import { useMousePosition } from "./UseMousePosition";

import "./ContentGrid.scss";
import colors from "./colors.scss";

export default function ContentGridPanel(props) {
  const [hoverRef, isHovered] = useHover();
  const mousePosition = useMousePosition();
  const [on, toggle] = useState(false);

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
      transform: isHovered ? "scale(1.1)" : "scale(1)"
    }
  });

  // const transitionProps = useTransition(on, null, {
  //   enter: { opacity: 0.5 },
  //   leave: { opacity: 0.9 }
  // });

  return (
    <div className="flex-item">
        <div className="item-wrapper">
            <animated.div
              className="item-backdrop"
              style={wrapperSpringProps}
            ></animated.div>
            <animated.div
              className="item-content"
              style={springProps}
              ref={hoverRef}
              onClick={() => toggle(!on)}
            >
              {on ? "toggled" : props.title}
            </animated.div>
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
    x: (mousePosition.x - centerPosition.x) / 10,
    y: (mousePosition.y - centerPosition.y) / 10
  };
  const translationString =
    "translate(" +
    displacement.x.toString() +
    "px," +
    displacement.y.toString() +
    "px)";

  return translationString;
}
