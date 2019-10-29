import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContentGridPanel from './ContentGridPanel'

import './ContentGrid.scss'

var array1 = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6', 'panel7', 'panel8', 'panel9'];

// pass a function to map
const gridItems = array1.map((x) => <ContentGridPanel title={x}/>);

export default function ContentGrid(props) {
  return (
    <div className='root'>
      <Grid container spacing={3}>
        {gridItems}
      </Grid>
    </div>
  );
}