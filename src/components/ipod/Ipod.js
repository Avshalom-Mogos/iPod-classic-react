import React from 'react';
import IpodScreen from '../ipod-screen/IpodScreen';
import IpodButtons from '../ipod-buttons/IpodButtons';
import YoutubeLoader from '../youtube-loader/YoutubeLoader';
import { IpodStateProvider } from '../../contexts/IpodStateContext';
import { PlayerProvider } from '../../contexts/PlayerContext';
import classes from './Ipod.module.css';


const Ipod = () => {
    return (
        <div className={classes.Ipod}>
            <IpodStateProvider>
                <PlayerProvider>
                    <IpodScreen />
                    <IpodButtons />
                    <YoutubeLoader />
                </PlayerProvider>
            </IpodStateProvider>
        </div>
    )
};
export default Ipod;