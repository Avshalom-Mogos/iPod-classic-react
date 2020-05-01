import React, { useContext, useState, useEffect } from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './ProgressBar.module.css';


const ProgressBar = (props) => {

    const { duration } = props;
    const { player } = useContext(IpodStateContext);
    const [currentTime, setCurrentTime] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        if (player.state === window.YT.PlayerState.PLAYING) {
            const interval = setInterval(() => setCurrentTime(player.obj.getCurrentTime()), 1000);
            setIntervalId(interval);
        } else {
            clearInterval(intervalId)
        };
    }, [player.state]);

    const percentageCompleted = ((currentTime / duration) * 100);
    const formatTime = (time) => new Date(time * 1000).toISOString().substr(15, 4);

    return (
        <div className={classes.progressBarContainer}>
            <div className={classes.currentTime}>
                <p>{formatTime(currentTime)}</p>
            </div>
            <div className={classes.progressBar}>
                <div className={classes.progressBarFill} style={{ width: percentageCompleted + "%" }}></div>
            </div>
            <div className={classes.endTime}>
                <p>{`-${formatTime(duration - currentTime)}`}</p>
            </div>
        </div >
    )
};
export default ProgressBar;