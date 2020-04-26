import React from 'react';
import classes from './ScreenSaver.module.css';


const ScreenSaver = () => {
    return (
        <div className={`${classes.screenSaver} ${classes.off}`}>
            <h1 className={classes.hour}>
                {new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: "numeric",
                    minute: "numeric"
                })}
            </h1>
        </div>
    )
};
export default ScreenSaver;