import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import Youtube from 'react-youtube';
import classes from './TopBar.module.css';
var TopBar = function (props) {
    var player = useTypedContext(IpodStateContext).player;
    var getIconClass = function () {
        switch (player.state) {
            case Youtube.PlayerState.PLAYING:
                return "fas fa-play " + classes.playPause;
            case Youtube.PlayerState.PAUSED:
                return "fas fa-pause " + classes.playPause;
            case Youtube.PlayerState.BUFFERING:
                return "fas fa-spinner fa-pulse " + classes.spinner;
        }
        return '';
    };
    return (React.createElement("div", { className: classes.topBar },
        React.createElement("div", { className: classes.title }, props.title),
        React.createElement("div", { className: classes.icons },
            React.createElement("i", { className: getIconClass() + " " + classes.icon }),
            React.createElement("div", { className: classes.battery },
                React.createElement("div", { className: classes.batteryBody }),
                React.createElement("div", { className: classes.batteryHead })))));
};
export default React.memo(TopBar);
