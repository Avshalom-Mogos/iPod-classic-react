import * as React from 'react';
import TopBar from '../top-bar/TopBar';
import ProgressBar from '../progress-bar/ProgressBar';
import VolumeBar from '../volume-bar/VolumeBar';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import classes from './Player.module.css';
import { useTypedContext } from '../../hooks';
var Player = function () {
    var _a = useTypedContext(IpodStateContext), player = _a.player, loadPlaylist = _a.loadPlaylist, setLoadPlaylist = _a.setLoadPlaylist;
    var _b = useTypedContext(PlayerContext), album = _b.album, song = _b.song, songIndex = _b.songIndex;
    React.useEffect(function () {
        //prevent reload when coming from Menu
        if (loadPlaylist && player.obj) {
            //@ts-ignore - check correct payload 
            player.obj.loadPlaylist({
                listType: 'playlist',
                list: album.id,
                index: songIndex
            });
            setLoadPlaylist(false);
        }
        ;
    }, [album.id, player.obj, loadPlaylist, setLoadPlaylist, songIndex]);
    return (React.createElement("div", { className: classes.player },
        React.createElement(TopBar, { title: 'Now Playing' }),
        React.createElement("div", { className: classes.container },
            React.createElement("div", { className: classes.songInfoContainer },
                React.createElement("img", { src: album.cover, alt: "albumCover" }),
                React.createElement("div", { className: classes.songInfo },
                    React.createElement("p", { className: classes.songInfoTitle }, song.title),
                    React.createElement("p", { className: classes.songInfoArtist }, album.artist),
                    React.createElement("p", { className: classes.songInfoAlbumName }, album.name),
                    React.createElement("p", { className: classes.songInfoIndex }, songIndex + 1 + " of " + album.items.length)),
                React.createElement(ProgressBar, { duration: song.duration }),
                React.createElement(VolumeBar, null)))));
};
export default React.memo(Player);
