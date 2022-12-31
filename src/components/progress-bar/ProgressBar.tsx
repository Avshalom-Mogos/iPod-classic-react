import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import Youtube from 'react-youtube';
import classes from './ProgressBar.module.css';

type ProgressBarProps = {
    duration: number;
};

const INVALID_INTERVAL_ID = -1;

const ProgressBar: React.FC<ProgressBarProps> = props => {

    const { duration } = props;
    const { player, toggleCoverflow, toggleVolumeBar } = useTypedContext(IpodStateContext);
    const [currentTime, setCurrentTime] = React.useState(0);
    const intervalId = React.useRef<number>(INVALID_INTERVAL_ID);

    React.useEffect(() => {
        if (player.state === Youtube.PlayerState.PLAYING && player.obj && intervalId.current === INVALID_INTERVAL_ID) {

            const id = window.setInterval((playerObj: YT.Player) => {
                setCurrentTime(playerObj.getCurrentTime());
            }, 1000, player.obj);

            intervalId.current = id;
        } else {
            clearInterval(intervalId.current);
            intervalId.current = INVALID_INTERVAL_ID;
        };
    }, [player.state, player.obj]);

    //clean up timer on unmount
    React.useEffect(() => clearInterval(intervalId.current), [toggleCoverflow]);

    const percentageCompleted = ((currentTime / duration) * 100);

    const formatTime = (time: number) => {
        // if song duration is over 10min show 5 char string
        return time >= 600
            ? new Date(time * 1000).toISOString().substr(14, 5)
            : new Date(time * 1000).toISOString().substr(15, 4)
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
