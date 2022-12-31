import * as React from 'react';
import { albumsData } from './data';
import * as Youtube from 'react-youtube';
export var IpodState;
(function (IpodState) {
    IpodState[IpodState["SCREEN_SAVER"] = 0] = "SCREEN_SAVER";
    IpodState[IpodState["MENU"] = 1] = "MENU";
    IpodState[IpodState["COVER_FLOW"] = 2] = "COVER_FLOW";
    IpodState[IpodState["PLAYER"] = 3] = "PLAYER";
})(IpodState || (IpodState = {}));
;
export var IpodStateContext = React.createContext(null);
export var IpodStateProvider = function (props) {
    var _a = React.useState(IpodState.SCREEN_SAVER), ipodState = _a[0], setIpodState = _a[1];
    var _b = React.useState(false), isOn = _b[0], setIsOn = _b[1];
    var _c = React.useState(albumsData), albums = _c[0], setAlbums = _c[1];
    //togglers
    var _d = React.useState(true), toggleScreenSaver = _d[0], setToggleScreenSaver = _d[1];
    var _e = React.useState(false), toggleMenu = _e[0], setToggleMenu = _e[1];
    var _f = React.useState(false), toggleCoverflow = _f[0], setToggleCoverflow = _f[1];
    var _g = React.useState(false), togglePlayer = _g[0], setTogglePlayer = _g[1];
    var _h = React.useState(true), toggleProgressBar = _h[0], setToggleProgressBar = _h[1];
    var _j = React.useState(false), toggleVolumeBar = _j[0], setToggleVolumeBar = _j[1];
    //set zindex
    var setZindex = function (stateName) {
        if (stateName === ipodState)
            return '55';
        return '';
    };
    //selected
    var initialSelected = Math.floor(albums.length / 2);
    var _k = React.useState(initialSelected), coverflowSelectedIndex = _k[0], setCoverflowSelectedIndex = _k[1]; //change this later
    var _l = React.useState(0), menuSelected = _l[0], setMenuSelected = _l[1];
    var _m = React.useState(false), flipCard = _m[0], setFlipCard = _m[1];
    var _o = React.useState(0), flipCardSelected = _o[0], setFlipCardSelected = _o[1];
    //player
    var initialPlayer = {
        obj: null,
        state: Youtube.default.PlayerState.UNSTARTED,
    };
    var _p = React.useState(initialPlayer), player = _p[0], setPlayer = _p[1];
    var _q = React.useState(false), loadPlaylist = _q[0], setLoadPlaylist = _q[1];
    var _r = React.useState(50), volumeLevel = _r[0], setVolumeLevel = _r[1];
    return (React.createElement(IpodStateContext.Provider, { value: {
            ipodState: ipodState,
            setIpodState: setIpodState,
            isOn: isOn,
            setIsOn: setIsOn,
            menuSelected: menuSelected,
            setMenuSelected: setMenuSelected,
            toggleScreenSaver: toggleScreenSaver,
            setToggleScreenSaver: setToggleScreenSaver,
            toggleMenu: toggleMenu,
            setToggleMenu: setToggleMenu,
            toggleCoverflow: toggleCoverflow,
            setToggleCoverflow: setToggleCoverflow,
            togglePlayer: togglePlayer,
            setTogglePlayer: setTogglePlayer,
            coverflowSelectedIndex: coverflowSelectedIndex,
            setCoverflowSelectedIndex: setCoverflowSelectedIndex,
            albums: albums,
            setAlbums: setAlbums,
            flipCard: flipCard,
            setFlipCard: setFlipCard,
            flipCardSelected: flipCardSelected,
            setFlipCardSelected: setFlipCardSelected,
            player: player,
            setPlayer: setPlayer,
            setZindex: setZindex,
            loadPlaylist: loadPlaylist,
            setLoadPlaylist: setLoadPlaylist,
            volumeLevel: volumeLevel,
            setVolumeLevel: setVolumeLevel,
            toggleProgressBar: toggleProgressBar,
            setToggleProgressBar: setToggleProgressBar,
            toggleVolumeBar: toggleVolumeBar,
            setToggleVolumeBar: setToggleVolumeBar,
        } }, props.children));
};
