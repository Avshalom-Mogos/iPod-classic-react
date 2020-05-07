import React, { useContext, useEffect } from 'react';
import TopBar from '../top-bar/TopBar';
import ProgressBar from '../progress-bar/ProgressBar';
import VolumeBar from '../volume-bar/VolumeBar'
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import classes from './Player.module.css';


const Player = () => {

    console.log('PLAYER RENDER');

    const {player,loadPlaylist,} = useContext(IpodStateContext);
    const { album, song, songIndex } = useContext(PlayerContext);

    useEffect(() => {
        //prevent reload after coming from Menu
        if (loadPlaylist) {
            //load playlist
            player.obj.cuePlaylist({
                listType: 'playlist',
                list: album.id,
            });
        };
    }, [album.id, player.obj]);


    return (
        <div className={classes.Player}>
            <TopBar title='Now Playing' />
            <div className={classes.container}>
                <div className={classes.songInfoContainer}>
                    <img src={album.cover} alt="albumCover" />
                    <div className={classes.songInfo}>
                        <p className={classes.songInfoTitle}>{song.title}</p>
                        <p className={classes.songInfoArtist}>{album.artist}</p>
                        <p className={classes.songInfoAlbumName}>{album.name}</p>
                        <p className={classes.songInfoIndex}>{`${songIndex + 1} of ${album.items.length}`}</p>
                    </div>
                    <ProgressBar duration={song.duration} />
                    <VolumeBar />
                </div>
            </div>
        </div>
    )
};
export default Player;