import React, { useContext } from 'react';
import YouTube from 'react-youtube';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import './YoutubeLoader.module.css';


const YoutubeLoader = () => {

    //might remove later
    const opts = {
        height: '0',
        width: '0',
        host: 'https://www.youtube.com',
        playerVars: {}
    };

    const { player, setPlayer, flipCardSelected ,setFlipCardSelected} = useContext(IpodStateContext);
    const onReady = (e) => setPlayer({ ...player, obj: e.target });

    const onStateChange = (e) => {
        setPlayer({ ...player, state: e.data });
        // console.log(e.data);

        if (e.data === window.YT.PlayerState.CUED) {
            e.target.playVideoAt(flipCardSelected);
        };

        if (e.data === window.YT.PlayerState.PLAYING) {
            const currentsongIndex = e.target.getPlaylistIndex();
            setFlipCardSelected(currentsongIndex)
            console.log("currentsongIndex: ", currentsongIndex);
        };
    };

    return <YouTube opts={opts} onReady={onReady} onStateChange={onStateChange} />
};
export default YoutubeLoader;