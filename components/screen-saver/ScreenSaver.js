import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import classes from './ScreenSaver.module.css';
var ScreenSaver = function () {
    var isOn = useTypedContext(IpodStateContext).isOn;
    var onOff = isOn ? classes.on : classes.off;
    var currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: "numeric",
        minute: "numeric"
    });
    return (React.createElement("div", { className: classes.screenSaver + " " + onOff },
        React.createElement("h1", { className: classes.hour }, currentTime)));
};
export default ScreenSaver;
