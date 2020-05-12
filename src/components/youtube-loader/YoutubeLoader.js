import React, { useContext } from 'react';
import YouTube from 'react-youtube';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import './YoutubeLoader.module.css';


const YoutubeLoader = () => {

    //might remove later
    const opts = {
        height: '0',
        width: '0',
        host: 'https://www.youtube.com',
        playerVars: {}
    };

    const { player, setPlayer, volumeLevel } = useContext(IpodStateContext);
    const { album, setSong, setSongIndex } = useContext(PlayerContext);

    const onReady = (e) => setPlayer({ ...player, obj: e.target });

    const onStateChange = (e) => {
        
        setPlayer({ ...player, state: e.data });

        if (e.data === window.YT.PlayerState.PLAYING) {
            //update song details on the player 
            const currentsongIndex = e.target.getPlaylistIndex();
            setSong(album.items[currentsongIndex]);
            setSongIndex(currentsongIndex);
            player.obj.setVolume(volumeLevel);
        };
    };

    return <YouTube opts={opts} onReady={onReady} onStateChange={onStateChange} />
};
export default YoutubeLoader;