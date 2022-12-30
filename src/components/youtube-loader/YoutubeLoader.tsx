import * as React from 'react';
import Youtube, { Options } from 'react-youtube';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import { useTypedContext } from '../../hooks';
import './YoutubeLoader.module.css';


const YoutubeLoader = () => {

    //might remove later
    const opts: Options = {
        height: '0',
        width: '0',
        // host: 'https://www.youtube.com', --> needed ??
        playerVars: {}
    };

    const { player, setPlayer, volumeLevel } = useTypedContext(IpodStateContext);
    const { album, setSong, setSongIndex } = useTypedContext(PlayerContext);

    const onReady = (e: { target: YT.Player }) => {
        setPlayer({ ...player, obj: e.target });
    };

    const onStateChange = (e: { target: YT.Player, data: number }) => {
        setPlayer({ ...player, state: e.data });
        if (e.data === Youtube.PlayerState.PLAYING && player.obj && album?.items) {
            //update song details on the player 
            const currentsongIndex = e.target.getPlaylistIndex();
            setSong(album.items[currentsongIndex]);
            setSongIndex(currentsongIndex);
            player.obj.setVolume(volumeLevel);
        };
    };

    return (
        <Youtube
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
        />
    )
};

export default YoutubeLoader;
