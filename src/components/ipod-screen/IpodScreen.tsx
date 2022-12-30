import * as React from 'react';
import Menu from '../menu/Menu';
import Coverflow from '../coverflow/Coverflow';
import Player from '../player/Player';
import ScreenSaver from '../screen-saver/ScreenSaver';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './IpodScreen.module.css';
import { useTypedContext } from '../../hooks';


const IpodScreen: React.FC<{}> = () => {

    const {
        toggleScreenSaver,
        toggleMenu,
        toggleCoverflow,
        togglePlayer
    } = useTypedContext(IpodStateContext);

    return (
        <div className={classes.ipodScreen}>
            <div className={classes.content}>
                {toggleScreenSaver && <ScreenSaver />}
                {toggleMenu && <Menu />}
                {toggleCoverflow && <Coverflow />}
                {togglePlayer && <Player />}
            </div>
        </div>
    )
};

export default IpodScreen;
