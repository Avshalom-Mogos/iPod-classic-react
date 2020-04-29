import React, { useContext } from 'react';
import YouTube from 'react-youtube';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './YoutubeLoader.module.css';


const YoutubeLoader = () => {

    //might remove later
    const opts = {
        height: '0',
        width: '0',
        host: 'https://www.youtube.com',
        playerVars: {}
    };

    const { player, setPlayer, onStateChange } = useContext(IpodStateContext);
    const onReady = (e) => {
        player.obj = e.target;
        setPlayer({ ...player, obj: e.target });
        console.log(player);

    }

    return <YouTube opts={opts} onReady={onReady} onStateChange={onStateChange} />
};
export default YoutubeLoader;