import React, { Component } from 'react';
import './NavBar.scss'
// import ColorBar from './ColorBar.js'

export default class NavBar extends Component {
    render() {
        return(
            <div className='navBar-wrapper'>
            <span className='navBar-col navBar-left'>
                <span className='navBar-span'>brendan miller</span>
                <span className='navBar-span'>example text<br/>im gay</span>
                {/* <span className='navBar-span'><ColorBar/></span> */}
            </span>
            <span className='navBar-col navBar-right'>
                <span className='navBar-span'>right align</span>
            </span>
            </div>
        );
    }
};