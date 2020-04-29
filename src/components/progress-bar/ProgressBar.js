import React, { useContext, useState, useEffect } from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './ProgressBar.module.css';


const ProgressBar = (props) => {

    const { duration } = props;
    const { player } = useContext(IpodStateContext);
    const [currentTime, setCurrentTime] = useState(0);

    // useEffect(() => {
    //     trackTime()
    // },[currentTime])

    const percentageCompleted = ((currentTime / duration) * 100);
    const formatTime = (time) => new Date(time * 1000).toISOString().substr(15, 4);

    const trackTime = () => {
        setInterval(() => {
            setCurrentTime(player.obj.getCurrentTime());
            console.log(player.obj.getCurrentTime());

        }, 1000);
    };

    //trackTime()

    return (
        <div className={classes.progressBarContainer}>
            <span className={classes.currentTime}>{formatTime(currentTime)}</span>
            <span className={classes.progressBar}>
                <div className={classes.progressBarFill} style={{ width: percentageCompleted + "%" }}></div>
            </span>
            <span className={classes.endTime}>{formatTime(duration)}</span>
        </div >
    )
};
export default ProgressBar;