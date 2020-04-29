import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../top-bar/TopBar';
import classes from './Player.module.css';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import ProgressBar from '../progress-bar/ProgressBar';


const Player = () => {

    const {
        coverflowSelectedIndex,
        albums,
        flipCardSelected,
        player
    } = useContext(IpodStateContext);

    const currentAlbum = albums[coverflowSelectedIndex];
    const currentSong = currentAlbum.items[flipCardSelected];

    useEffect(() => {
        //load playlist
        console.log(player);
        
        player.obj.cuePlaylist({
            listType: 'playlist',
            list: currentAlbum.id,
        });
    }, [albums[coverflowSelectedIndex].id]);


    return (
        <div className={classes.Player}>
            <TopBar title='Now Playing' />
            <div className={classes.container}>
                <div className={classes.songInfoContainer}>
                    <img src={currentAlbum.cover} alt="albumCover" />
                    <div className={classes.songInfo}>
                        <p>{currentSong.title}</p>
                        <p>{currentAlbum.artist}</p>
                        <p>{currentAlbum.name}</p>
                        <p>{`${flipCardSelected + 1} of ${currentAlbum.items.length}`}</p>
                    </div>
                </div>
                <ProgressBar duration={currentSong.duration} />
            </div>
        </div>
    )
};
export default Player;