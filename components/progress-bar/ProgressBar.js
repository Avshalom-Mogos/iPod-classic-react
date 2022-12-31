import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import Youtube from 'react-youtube';
import classes from './ProgressBar.module.css';
var ProgressBar = function (props) {
    var duration = props.duration;
    var _a = useTypedContext(IpodStateContext), player = _a.player, toggleCoverflow = _a.toggleCoverflow, toggleVolumeBar = _a.toggleVolumeBar;
    var _b = React.useState(0), currentTime = _b[0], setCurrentTime = _b[1];
    var intervalId = React.useRef(-1);
    React.useEffect(function () {
        if (player.state === Youtube.PlayerState.PLAYING && player.obj && intervalId.current === null) {
            var id = window.setInterval(function (playerObj) {
                setCurrentTime(playerObj.getCurrentTime());
            }, 1000, player.obj);
            intervalId.current = id;
        }
        else {
            clearInterval(intervalId.current);
            intervalId.current = -1;
        }
        ;
    }, [player.state, player.obj]);
    //clean up timer on unmount
    React.useEffect(function () { return clearInterval(intervalId.current); }, [toggleCoverflow]);
    var percentageCompleted = ((currentTime / duration) * 100);
    var formatTime = function (time) {
        // if song duration is over 10min show 5 char string
        return time >= 600
            ? new Date(time * 1000).toISOString().substr(14, 5)
            : new Date(time * 1000).toISOString().substr(15, 4);
    };
    var slide = toggleVolumeBar ? { transform: 'translateX(-100%)' } : {};
    return (React.createElement("div", { className: classes.progressBarContainer, style: slide },
        React.createElement("div", { className: classes.currentTime },
            React.createElement("p", null, formatTime(currentTime))),
        React.createElement("div", { className: classes.progressBar },
            React.createElement("div", { className: classes.progressBarFill, style: { width: percentageCompleted + "%" } })),
        React.createElement("div", { className: classes.endTime },
            React.createElement("p", null, "-" + formatTime(duration - currentTime)))));
};
export default ProgressBar;
