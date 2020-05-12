import React, { useContext, useState, useEffect } from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './ProgressBar.module.css';


const ProgressBar = (props) => {

    const { duration } = props;
    const { player, toggleCoverflow, toggleVolumeBar } = useContext(IpodStateContext);
    const [currentTime, setCurrentTime] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        if (player.state === window.YT.PlayerState.PLAYING && !intervalId) {

            const interval = setInterval(() => setCurrentTime(player.obj.getCurrentTime()), 1000);
            setIntervalId(interval);
            
        } else {
            setIntervalId(0);
            clearInterval(intervalId)
        };

    }, [player.state, player.obj]);

    //clean up timer on unmount
    useEffect(() => clearInterval(intervalId), [toggleCoverflow]);

    const percentageCompleted = ((currentTime / duration) * 100);

    const formatTime = time => {
        // if song duration is over 10min show 5 char string
        return time >= 600 ?
            new Date(time * 1000).toISOString().substr(14, 5)
            :
            new Date(time * 1000).toISOString().substr(15, 4)
    };

    const slide = toggleVolumeBar ? { transform: 'translateX(-100%)' } : {};

    return (
        <div className={classes.progressBarContainer} style={slide}>
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