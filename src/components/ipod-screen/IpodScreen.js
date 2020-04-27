import React, { useContext } from 'react';
import Menu from '../menu/Menu';
import Coverflow from '../coverflow/Coverflow';
import ScreenSaver from '../screen-saver/ScreenSaver';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './IpodScreen.module.css';


const IpodScreen = () => {

    const {
        toggleScreenSaver,
        toggleMenu,
        toggleCoverflow
    } = useContext(IpodStateContext);

    return (
        <div className={classes.IpodScreen}>
            <div className={classes.content}>
                {toggleScreenSaver && <ScreenSaver />}
                {toggleMenu && <Menu />}
                {toggleCoverflow && <Coverflow />}
            </div>
        </div>
    )
};
export default IpodScreen;