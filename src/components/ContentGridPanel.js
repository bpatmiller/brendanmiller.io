import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHover } from "./UseHover";
import {useSpring, animated} from 'react-spring'
import { useMousePosition } from "./UseMousePosition";

import "./ContentGrid.scss";

const AnimatedPaper = animated(Paper);

export default function ContentGridPanel(props) {
  const [hoverRef, isHovered] = useHover();
  const mousePosition = useMousePosition();
  const springProps = useSpring({transform: isHovered ? getTranslation(hoverRef, isHovered, mousePosition) : 'translate(0px, 0px)'})

  return (
    <Grid item xs={12} sm={6} md={4}>
        <AnimatedPaper className="paper" style={springProps}  ref={hoverRef}> {isHovered? "hover" : props.title}</AnimatedPaper>
    </Grid>
  );
}

function getTranslation(hoverRef, isHovered, mousePosition) {
    const node = hoverRef.current;
    if (! node || ! isHovered) {
      return 'translate(0px,0px)';
    }
    const bbRect = node.getBoundingClientRect();
    const centerPosition = { x: (bbRect.right + bbRect.left) / 2, y: (bbRect.top + bbRect.bottom)/2 };
    const displacement = {x: (mousePosition.x - centerPosition.x) / 10, y: ( mousePosition.y - centerPosition.y) / 10 };
    const translationString = "translate("+ displacement.x.toString() + "px," + displacement.y.toString() + "px)";

  return translationString;
}

