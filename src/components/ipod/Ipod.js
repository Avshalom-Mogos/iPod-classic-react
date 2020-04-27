import React from 'react';
import IpodScreen from '../ipod-screen/IpodScreen';
import IpodButtons from '../ipod-buttons/IpodButtons';
import { IpodStateProvider } from '../../contexts/IpodStateContext';
import classes from './Ipod.module.css';


const Ipod = () => {
    return (
        <div className={classes.Ipod}>
            <IpodStateProvider>
                <IpodScreen />
                <IpodButtons />
            </IpodStateProvider>
        </div>
    )
};
export default Ipod;