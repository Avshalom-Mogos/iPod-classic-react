import React, { useContext } from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './ScreenSaver.module.css';


const ScreenSaver = () => {

    const { isOn } = useContext(IpodStateContext);
    const onOff = isOn ? classes.on : classes.off;
    return (
        <div className={`${classes.screenSaver} ${onOff}`}>
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