import React from 'react';
import IpodScreen from '../ipod-screen/IpodScreen'
import IpodButtons from '../ipod-buttons/IpodButtons'
import classes from './Ipod.module.css';


const Ipod = () => {
    return (
        <div className={classes.Ipod}>
            <IpodScreen />
            <IpodButtons />
        </div>
    )
};
export default Ipod;