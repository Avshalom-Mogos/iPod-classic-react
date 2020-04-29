import React, { useContext } from 'react';
import classes from './Player.module.css';
import YouTube from 'react-youtube';


const Player = () => {
    // const { loadPlaylist, getPlaylistData } = useContext(PlaylistContext);

    // const playerRef = {};
    const opts = {
        height: '0',
        width: '0',
        host: 'https://www.youtube.com',
        playerVars: {}
    };

    // console.log(window.location.origin); ---> http://localhost:3000


    const onReady = (e) => {
        // access to player in all event handlers via event.target
        // loadPlaylist(e, hits_2000);
        console.log("Ready: ", e.target);

    }

    const onStateChange = (e) => {
        // getPlaylistData(e)
        console.log("State Change: ", e);
    }

    return (
        <div className={classes.Player}>

            <YouTube opts={opts} onReady={onReady} onStateChange={onStateChange} />
        </div>
    )
}
export default Player;