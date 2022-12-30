import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import Youtube from 'react-youtube';
import classes from './TopBar.module.css';

type TopBarProps = {
    title: string
};

const TopBar: React.FC<TopBarProps> = props => {

    const { player } = useTypedContext(IpodStateContext);

    const getIconClass = () => {
        switch (player.state) {
            case Youtube.PlayerState.PLAYING:
                return `fas fa-play ${classes.playPause}`;
            case Youtube.PlayerState.PAUSED:
                return `fas fa-pause ${classes.playPause}`;
            case Youtube.PlayerState.BUFFERING:
                return `fas fa-spinner fa-pulse ${classes.spinner}`;
        }
        return '';
    };

    return (
        <div className={classes.topBar}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.icons}>
                <i className={`${getIconClass()} ${classes.icon}`}></i>
                <div className={classes.battery}>
                    <div className={classes.batteryBody}></div>
                    <div className={classes.batteryHead}></div>
                </div>
            </div>
        </div>
    )
};

export default React.memo(TopBar);
