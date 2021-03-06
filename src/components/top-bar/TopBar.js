import React, { useContext, memo } from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './TopBar.module.css';


const TopBar = (props) => {

    const { title } = props;
    const { player } = useContext(IpodStateContext);

    const setIcon = () => {
        if (!window.YT) return
        if (player.state === window.YT.PlayerState.PLAYING) return `fas fa-play ${classes.playPause}`;
        if (player.state === window.YT.PlayerState.PAUSED) return `fas fa-pause ${classes.playPause}`;
        if (player.state === window.YT.PlayerState.BUFFERING) return `fas fa-spinner fa-pulse ${classes.spinner}`;
        return "";
    };

    return (
        <div className={classes.TopBar}>
            <div className={classes.title}>{title}</div>
            <div className={classes.icons}>
                <i className={`${setIcon()} ${classes.icon}`}></i>
                <div className={classes.battery}>
                    <div className={classes.batteryBody}></div>
                    <div className={classes.batteryHead}></div>
                </div>
            </div>
        </div>
    )
};
export default memo(TopBar);