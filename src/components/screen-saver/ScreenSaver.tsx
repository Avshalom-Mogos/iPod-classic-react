import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import classes from './ScreenSaver.module.css';


const ScreenSaver: React.FC<{}> = () => {
    const { isOn } = useTypedContext(IpodStateContext);
    const onOff = isOn ? classes.on : classes.off;
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: "numeric",
        minute: "numeric"
    });

    return (
        <div className={`${classes.screenSaver} ${onOff}`}>
            <h1 className={classes.hour}>{currentTime}</h1>
        </div>
    )
};

export default ScreenSaver;
