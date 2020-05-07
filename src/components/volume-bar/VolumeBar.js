import React, { useContext, useEffect, useState } from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './VolumeBar.module.css';


const VolumeBar = () => {


    console.log('VolumeBar RENDER');
    

    const { volumeLevel, toggleVolumeBar } = useContext(IpodStateContext);

    const slide = toggleVolumeBar ? { transform: 'translateX(-100%)' } : {};
   

    return (
        <div className={classes.volumeBarContainer} style={slide}>
            <div className={classes.volStart}>
                <i className="fas fa-volume-off"></i>
            </div>
            <div className={classes.volumeBar}>
                <div className={classes.volumeBarFill} style={{ width: volumeLevel + "%" }}></div>
            </div>
            <div className={classes.volEnd}>
                <i className="fas fa-volume-up"></i>
            </div>
        </div >
    )
};
export default VolumeBar;