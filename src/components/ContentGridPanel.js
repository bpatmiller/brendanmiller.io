import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './ContentGridPanel.scss'
import './UseMousePosition'
import { useMousePosition } from './UseMousePosition';
import { useHover } from './UseHover';

export default function ContentGridPanel(props) {
    const [hoverRef, isHovered] = useHover();
    const mousePosition = useMousePosition();
    const translateString = getTranslateString(hoverRef, isHovered, mousePosition);

    return (
    <Grid item xs={12} sm={6} md={4}>
        <Paper className='paper' style={isHovered ? {  transform: translateString } : {}} ref={hoverRef}>{isHovered ? props.title : props.title}</Paper>
    </Grid>
    );
}

function getTranslateString(hoverRef, isHovered, mousePosition) {
  const node = hoverRef.current;
  if (! node || ! isHovered) {
    return '';
  }

  const bbRect = node.getBoundingClientRect();
  const centerPosition = { x: (bbRect.right + bbRect.left) / 2, y: (bbRect.top + bbRect.bottom)/2 };
  const displacement = {x: (mousePosition.x - centerPosition.x) / 15, y: ( mousePosition.y - centerPosition.y) / 15 };
  const translationString = "translate("+ displacement.x.toString() + "px," + displacement.y.toString() + "px)";

  return translationString;
 
}