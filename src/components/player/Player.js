import React, { useContext, useEffect } from 'react';
import TopBar from '../top-bar/TopBar';
import ProgressBar from '../progress-bar/ProgressBar';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './Player.module.css';


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
        player.obj.cuePlaylist({
            listType: 'playlist',
            list: currentAlbum.id,
        });
    }, [currentAlbum.id, player.obj]);


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