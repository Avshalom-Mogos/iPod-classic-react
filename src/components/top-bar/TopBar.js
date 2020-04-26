import React from 'react';
import classes from './TopBar.module.css';


const TopBar = (props) => {
    const { title } = props;
    return (
        <div className={classes.TopBar}>
            <div className={classes.title}>{title}</div>
            <i className={`fas fa-battery-full ${classes.battery}`}></i>
        </div>
    )
};
export default TopBar;