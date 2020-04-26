import React from 'react';
import ScreenSaver from '../screen-saver/ScreenSaver'
import Menu from '../menu/Menu'
import classes from './IpodScreen.module.css';


const IpodScreen = () => {
    return (
        <div className={classes.IpodScreen}>
            <div className={classes.content}>
                {/* <ScreenSaver/> */}
                <Menu/>
            </div>
        </div>
    )
};
export default IpodScreen;