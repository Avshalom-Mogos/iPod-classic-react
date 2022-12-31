import * as React from 'react';
import { handleDown, StopPanMode, handleMove } from '../../inputHandlers/wheel';
import { handleForwardBackwardUp, handleForwardBackwardDown, stopHoldState } from '../../inputHandlers/forwardBackward';
import handleOkClick from '../../inputHandlers/ok';
import handleMenuClick from '../../inputHandlers/menu';
import handlePlayPauseClick from '../../inputHandlers/playPause';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import classes from './IpodButtons.module.css';
import { useTypedContext } from '../../hooks';
var IpodButtons = function () {
    var context = useTypedContext(IpodStateContext);
    var playerContext = useTypedContext(PlayerContext);
    return (React.createElement("div", { className: classes.ipodButtons },
        React.createElement("div", { className: classes.wheel, 
            //desktop events
            onMouseDown: handleDown, onMouseUp: StopPanMode, onMouseLeave: StopPanMode, onMouseMove: function (e) { return handleMove(e, context); }, 
            //mobile events
            onTouchStart: handleDown, onTouchEnd: StopPanMode, onTouchCancel: StopPanMode, onTouchMove: function (e) { return handleMove(e, context); } },
            React.createElement("button", { className: classes.menu, onClick: function () { return handleMenuClick(context); } }, "MENU"),
            React.createElement("button", { className: classes.backward },
                React.createElement("i", { className: 'fas fa-fast-backward', onMouseDown: function () { return handleForwardBackwardDown(context, 'rewind'); }, onMouseUp: function () { return handleForwardBackwardUp(context, 'left'); }, onTouchStart: function () { return handleForwardBackwardDown(context, 'rewind'); }, onTouchEnd: stopHoldState })),
            React.createElement("div", { className: classes.ok, onClick: function () { return handleOkClick(context, playerContext); } }),
            React.createElement("button", { className: classes.forward },
                React.createElement("i", { className: 'fas fa-fast-forward', onMouseDown: function () { return handleForwardBackwardDown(context, 'fastForward'); }, onMouseUp: function () { return handleForwardBackwardUp(context, 'right'); }, onTouchStart: function () { return handleForwardBackwardDown(context, 'fastForward'); }, onTouchEnd: stopHoldState })),
            React.createElement("button", { className: classes.playPause, onClick: function () { return handlePlayPauseClick(context); } },
                React.createElement("i", { className: 'fas fa-play' }),
                React.createElement("i", { className: 'fas fa-pause' })))));
};
export default IpodButtons;
