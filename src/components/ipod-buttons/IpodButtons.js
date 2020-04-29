import React, { useContext } from 'react';
import { handleDown, StopPanMode, handleMove } from '../../inputHandlers/wheel';
import handleOkClick from '../../inputHandlers/ok';
import handleMenuClick from '../../inputHandlers/menu';
import handleForwardClick from '../../inputHandlers/forward';
import handleBackwardClick from '../../inputHandlers/backward';
import handlePlayPauseClick from '../../inputHandlers/playPause';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './IpodButtons.module.css';


const IpodButtons = () => {

    const context = useContext(IpodStateContext);

    return (
        <div className={classes.IpodButtons}>
            <div className={classes.wheel}
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
                <button className={classes.menu} onClick={() => handleMenuClick(context)}>MENU</button>
                <button className={classes.backward} onClick={() => handleBackwardClick(context)}>
                    <i className='fas fa-fast-backward'></i>
                </button>
                <div className={classes.ok} onClick={() => handleOkClick(context)}></div>
                <button className={classes.forward} onClick={() => handleForwardClick(context)}>
                    <i className='fas fa-fast-forward'></i>
                </button>
                <button className={classes.playPause} onClick={() => handlePlayPauseClick(context)}>
                    <i className='fas fa-play'></i>
                    <i className='fas fa-pause'></i>
                </button>
            </div>
        </div>
    )
};
export default IpodButtons;