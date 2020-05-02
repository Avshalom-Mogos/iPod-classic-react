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
        player,
        loadPlaylist
    } = useContext(IpodStateContext);


    const currentAlbum = albums[coverflowSelectedIndex];
    const currentSong = currentAlbum.items[flipCardSelected];

    useEffect(() => {
        //show components
        if (loadPlaylist) {
            //load playlist
            player.obj.cuePlaylist({
                listType: 'playlist',
                list: currentAlbum.id,
            });
        };
    }, [currentAlbum.id, player.obj]);


    return (
        <div className={classes.Player}>
            <TopBar title='Now Playing' />
            <div className={classes.container}>
                <div className={classes.songInfoContainer}>
                    <img src={currentAlbum.cover} alt="albumCover" />
                    <div className={classes.songInfo}>
                        <p className={classes.songInfoTitle}>{currentSong.title}</p>
                        <p className={classes.songInfoArtist}>{currentAlbum.artist}</p>
                        <p className={classes.songInfoAlbumName}>{currentAlbum.name}</p>
                        <p className={classes.songInfoIndex}>{`${flipCardSelected + 1} of ${currentAlbum.items.length}`}</p>
                    </div>
                    <ProgressBar duration={currentSong.duration} />
                </div>
            </div>
        </div>
    )
};
export default Player;