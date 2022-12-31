import * as React from 'react';
export var PlayerContext = React.createContext(null);
export var PlayerProvider = function (props) {
    var _a = React.useState({}), album = _a[0], setAlbum = _a[1];
    var _b = React.useState({}), song = _b[0], setSong = _b[1];
    var _c = React.useState(0), songIndex = _c[0], setSongIndex = _c[1];
    return (React.createElement(PlayerContext.Provider, { value: {
            album: album,
            setAlbum: setAlbum,
            song: song,
            setSong: setSong,
            songIndex: songIndex,
            setSongIndex: setSongIndex
        } }, props.children));
};
