var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import Youtube from 'react-youtube';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from '../../contexts/PlayerContext';
import { useTypedContext } from '../../hooks';
import './YoutubeLoader.module.css';
var YoutubeLoader = function () {
    //might remove later
    var opts = {
        height: '0',
        width: '0',
        // host: 'https://www.youtube.com', --> needed ??
        playerVars: {}
    };
    var _a = useTypedContext(IpodStateContext), player = _a.player, setPlayer = _a.setPlayer, volumeLevel = _a.volumeLevel;
    var _b = useTypedContext(PlayerContext), album = _b.album, setSong = _b.setSong, setSongIndex = _b.setSongIndex;
    var onReady = function (e) {
        setPlayer(__assign(__assign({}, player), { obj: e.target }));
    };
    var onStateChange = function (e) {
        setPlayer(__assign(__assign({}, player), { state: e.data }));
        if (e.data === Youtube.PlayerState.PLAYING && player.obj) {
            //update song details on the player 
            var currentsongIndex = e.target.getPlaylistIndex();
            setSong(album.items[currentsongIndex]);
            setSongIndex(currentsongIndex);
            player.obj.setVolume(volumeLevel);
        }
        ;
    };
    return (React.createElement(Youtube, { opts: opts, onReady: onReady, onStateChange: onStateChange }));
};
export default YoutubeLoader;
