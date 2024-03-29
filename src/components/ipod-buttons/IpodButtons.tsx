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


const IpodButtons: React.FC<{}> = () => {

    const context = useTypedContext(IpodStateContext);
    const playerContext = useTypedContext(PlayerContext);

    return (
        <div className={classes.ipodButtons}>

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
                >
                    MENU
                </button>

                <button className={classes.backward}>
                    <i
                        className='fas fa-fast-backward'
                        onMouseDown={() => handleForwardBackwardDown(context, 'rewind')}
                        onMouseUp={() => handleForwardBackwardUp(context, 'left')}
                        onTouchStart={() => handleForwardBackwardDown(context, 'rewind')}
                        onTouchEnd={stopHoldState}
                    >
                    </i>
                </button>

                <div
                    className={classes.ok}
                    onClick={() => handleOkClick(context, playerContext)}
                >
                </div>

                <button className={classes.forward}>
                    <i
                        className='fas fa-fast-forward'
                        onMouseDown={() => handleForwardBackwardDown(context, 'fastForward')}
                        onMouseUp={() => handleForwardBackwardUp(context, 'right')}
                        onTouchStart={() => handleForwardBackwardDown(context, 'fastForward')}
                        onTouchEnd={stopHoldState}
                    >
                    </i>
                </button>

                <button
                    className={classes.playPause}
                    onClick={() => handlePlayPauseClick(context)}
                >
                    <i className='fas fa-play'></i>
                    <i className='fas fa-pause'></i>
                </button>
            </div>
        </div >
    )
};

export default IpodButtons;
