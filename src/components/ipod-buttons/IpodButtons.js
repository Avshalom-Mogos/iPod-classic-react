import React, { useContext } from 'react';
import {
    handleOkClick,
    handleDown,
    handleMove,
    StopPanMode
} from '../../logic/inputHandler';
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
                onMouseMove={(e) => handleMove(e, context.ipodState, context.menuSelected, context.setMenuSelected)}
                //mobile events
                onTouchStart={handleDown}
                onTouchEnd={StopPanMode}
                onTouchCancel={StopPanMode}
                onTouchMove={(e) => handleMove(e, context.ipodState, context.menuSelected, context.setMenuSelected)}
            >
                <div className={classes.topButtons}>
                    <button className={classes.menu}>MENU</button>
                </div>
                <div className={classes.middleButtons}>
                    <button className={classes.backward}><i className='fas fa-fast-backward'></i></button>
                    <div className={classes.ok} onClick={() => handleOkClick({ ...context })}></div>
                    <button className={classes.forward}><i className='fas fa-fast-forward'></i></button>
                </div>
                <div className={classes.bottomButtons}>
                    <button className={classes.playPause}>
                        <i className='fas fa-play'></i>
                        <i className='fas fa-pause'></i>
                    </button>
                </div>
            </div>
        </div>
    )
};
export default IpodButtons;