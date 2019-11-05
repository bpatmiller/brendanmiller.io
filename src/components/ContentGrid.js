import React from 'react';
import ContentGridPanel from './ContentGridPanel'

import '../scss/ContentGrid.scss'

var array1 = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6'];

// pass a function to map
const gridItems = array1.map((x) => <ContentGridPanel title={x}/>);

export default function ContentGrid(props) {
  return (
    <div className='flex-container'>
        {gridItems}
    </div>
  );
}