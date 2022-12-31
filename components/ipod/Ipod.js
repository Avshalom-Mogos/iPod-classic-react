import * as React from 'react';
import IpodScreen from '../ipod-screen/IpodScreen';
import IpodButtons from '../ipod-buttons/IpodButtons';
import YoutubeLoader from '../youtube-loader/YoutubeLoader';
import { IpodStateProvider } from '../../contexts/IpodStateContext';
import { PlayerProvider } from '../../contexts/PlayerContext';
import classes from './Ipod.module.css';
var Ipod = function () {
    return (React.createElement("div", { className: classes.ipod },
        React.createElement(IpodStateProvider, null,
            React.createElement(PlayerProvider, null,
                React.createElement(IpodScreen, null),
                React.createElement(IpodButtons, null),
                React.createElement(YoutubeLoader, null)))));
};
export default Ipod;
