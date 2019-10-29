import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useRef, useState, useEffect } from 'react';
import './ContentGridPanel.css'

export default function ContentGridPanel(props) {
    const [hoverRef, isHovered] = useHover();

    return (
    <Grid item xs={12} sm={6} md={4}>
        <Paper className='paper' ref={hoverRef}>{isHovered ? 'hovered' : props.title}</Paper>
    </Grid>
    );
}

function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
  );

  return [ref, value];
}