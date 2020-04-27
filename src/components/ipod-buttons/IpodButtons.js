import React, { useContext } from 'react';
import { handleOkClick } from '../../logic/inputHandler';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './IpodButtons.module.css';


const IpodButtons = () => {

    const {
        ipodState,
        setIsOn,
        setIpodState,
        toggleScreenSaver,
        setToggleScreenSaver,
        toggleMenu,
        setToggleMenu,
        toggleCoverflow,
        setToggleCoverflow
    } = useContext(IpodStateContext);

    return (
        <div className={classes.IpodButtons}>
            <div className={classes.wheel}>
                <div className={classes.topButtons}>
                    <button className={classes.menu}>MENU</button>
                </div>
                <div className={classes.middleButtons}>
                    <button className={classes.backward}><i className='fas fa-fast-backward'></i></button>
                    <div className={classes.ok} onClick={() => handleOkClick({
                        ipodState,
                        setIsOn,
                        setIpodState,
                        setToggleScreenSaver,
                        setToggleMenu,
                        setToggleCoverflow
                    })}></div>
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