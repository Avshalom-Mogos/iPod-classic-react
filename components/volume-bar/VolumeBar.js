import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import classes from './VolumeBar.module.css';
var VolumeBar = function () {
    var _a = useTypedContext(IpodStateContext), volumeLevel = _a.volumeLevel, toggleVolumeBar = _a.toggleVolumeBar;
    var slide = toggleVolumeBar ? { transform: 'translateX(-100%)' } : {};
    return (React.createElement("div", { className: classes.volumeBarContainer, style: slide },
        React.createElement("div", { className: classes.volStart },
            React.createElement("i", { className: "fas fa-volume-off" })),
        React.createElement("div", { className: classes.volumeBar },
            React.createElement("div", { className: classes.volumeBarFill, style: { width: volumeLevel + "%" } })),
        React.createElement("div", { className: classes.volEnd },
            React.createElement("i", { className: "fas fa-volume-up" }))));
};
export default VolumeBar;
