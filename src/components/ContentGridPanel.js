import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHover } from "./UseHover";
import {useSpring, animated} from 'react-spring'

import "./ContentGrid.scss";

export default function ContentGridPanel(props) {
  const [hoverRef, isHovered] = useHover();
  const springProps = useSpring({transform: isHovered ? 'translate(5px, -5px)' : 'translate(0px, 0px)'})
  const AnimatedPaper = animated(Paper);

  return (
    <Grid item xs={12} sm={6} md={4}>
        <AnimatedPaper className="paper" style={springProps}  ref={hoverRef}> {isHovered? "hover" : props.title}</AnimatedPaper>
    </Grid>
  );
}
