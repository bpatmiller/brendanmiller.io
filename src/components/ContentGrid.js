import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContentGridPanel from './ContentGridPanel'

import './ContentGrid.scss'

var array1 = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6'];

// pass a function to map
const gridItems = array1.map((x) => <ContentGridPanel title={x}/>);

export default function ContentGrid(props) {
  return (
    <div className='contentGridRoot'>
      <Grid className='contentGrid' container spacing={3} alignContent='center' alignItems='center' justify='center'>
        {gridItems}
      </Grid>
    </div>
  );
}