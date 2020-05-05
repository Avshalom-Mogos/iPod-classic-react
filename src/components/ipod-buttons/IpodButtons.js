import React, { useContext } from 'react';
import { handleDown, StopPanMode, handleMove } from '../../inputHandlers/wheel';
import handleOkClick from '../../inputHandlers/ok';
import handleMenuClick from '../../inputHandlers/menu';

import { handleForwardBackwardUp, handleForwardBackwardDown, stopHoldState } from '../../inputHandlers/forwardBackward';

import handlePlayPauseClick from '../../inputHandlers/playPause';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './IpodButtons.module.css';


const IpodButtons = () => {

    const context = useContext(IpodStateContext);

    return (
        <div className={classes.IpodButtons}>

            <div
                className={classes.wheel}
                //desktop events
                onMouseDown={handleDown}
                onMouseUp={StopPanMode}
                onMouseLeave={StopPanMode}
                onMouseMove={(e) => handleMove(e, context)}
                //mobile events
                onTouchStart={handleDown}
                onTouchEnd={StopPanMode}
                onTouchCancel={StopPanMode}
                onTouchMove={(e) => handleMove(e, context)}
            >


                <button
                    className={classes.menu}
                    onClick={() => handleMenuClick(context)}
                >MENU</button>

                <button
                    className={classes.backward}
                    onMouseDown={() => handleForwardBackwardDown(context, "rewind")}
                    onMouseUp={() => handleForwardBackwardUp(context, 'left')}
                    onTouchStart={() => handleForwardBackwardDown(context, "rewind")}
                    onTouchEnd={stopHoldState}
                >
                    <i className='fas fa-fast-backward'></i>
                </button>

                <div
                    className={classes.ok}
                    onClick={() => handleOkClick(context)}
                >
                </div>

                <button
                    className={classes.forward}
                    onMouseDown={() => handleForwardBackwardDown(context, "fastForward")}
                    onMouseUp={() => handleForwardBackwardUp(context, 'right')}
                    onTouchStart={() => handleForwardBackwardDown(context, "fastForward")}
                    onTouchEnd={stopHoldState}
                >
                    <i className='fas fa-fast-forward'></i>
                </button>

                <button
                    className={classes.playPause}
                    onClick={() => handlePlayPauseClick(context)}
                >
                    <i className='fas fa-play'></i>
                    <i className='fas fa-pause'></i>
                </button>
            </div>
            {/* <button onClick={() => context.player.obj.mute()}>MUTE</button> */}
        </div>
    )
};
export default IpodButtons;