import * as React from 'react';
import TopBar from '../top-bar/TopBar';
import ProgressBar from '../progress-bar/ProgressBar';
import VolumeBar from '../volume-bar/VolumeBar'
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import classes from './Player.module.css';
import { useTypedContext } from '../../hooks';


const Player: React.FC<{}> = () => {

    const { player, loadPlaylist, setLoadPlaylist } = useTypedContext(IpodStateContext);
    const { album, song, songIndex } = useTypedContext(PlayerContext);

    const maybeUnmute = (playerApi: YT.Player) => {
        if (playerApi.isMuted()) {
            playerApi.unMute();
        }
    };

    React.useEffect(() => {
        //prevent reload when coming from Menu
        if (loadPlaylist && player.obj) {
            maybeUnmute(player.obj);
            //@ts-ignore - check correct payload 
            player.obj.loadPlaylist({
                listType: 'playlist',
                list: album?.id,
                index: songIndex
            });
            setLoadPlaylist(false);
        };
    }, [album?.id, player.obj, loadPlaylist, setLoadPlaylist, songIndex]);


    return (
        <div className={classes.player}>
            <TopBar title='Now Playing' />
            <div className={classes.container}>
                <div className={classes.songInfoContainer}>
                    <img src={album?.cover} alt="albumCover" />
                    <div className={classes.songInfo}>
                        <p className={classes.songInfoTitle}>{song?.title}</p>
                        <p className={classes.songInfoArtist}>{album?.artist}</p>
                        <p className={classes.songInfoAlbumName}>{album?.name}</p>
                        <p className={classes.songInfoIndex}>{`${songIndex + 1} of ${album?.items.length}`}</p>
                    </div>
                    <ProgressBar duration={song?.duration || 0} />
                    <VolumeBar />
                </div>
            </div>
        </div>
    )
};

export default React.memo(Player);
