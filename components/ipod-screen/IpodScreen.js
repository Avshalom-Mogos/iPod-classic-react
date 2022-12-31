import * as React from 'react';
import Menu from '../menu/Menu';
import Coverflow from '../coverflow/Coverflow';
import Player from '../player/Player';
import ScreenSaver from '../screen-saver/ScreenSaver';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './IpodScreen.module.css';
import { useTypedContext } from '../../hooks';
var IpodScreen = function () {
    var _a = useTypedContext(IpodStateContext), toggleScreenSaver = _a.toggleScreenSaver, toggleMenu = _a.toggleMenu, toggleCoverflow = _a.toggleCoverflow, togglePlayer = _a.togglePlayer;
    return (React.createElement("div", { className: classes.ipodScreen },
        React.createElement("div", { className: classes.content },
            toggleScreenSaver && React.createElement(ScreenSaver, null),
            toggleMenu && React.createElement(Menu, null),
            toggleCoverflow && React.createElement(Coverflow, null),
            togglePlayer && React.createElement(Player, null))));
};
export default IpodScreen;
