import React, { useState, createContext } from 'react';


export const PlayerContext = createContext();

export const PlayerProvider = (props) => {

    const [album, setAlbum] = useState(0);
    const [song, setSong] = useState(0);
    const [songIndex, setSongIndex] = useState(0);

    return (
        <PlayerContext.Provider value={{
            album,
            setAlbum,
            song,
            setSong,
            songIndex,
            setSongIndex
        }}>
            {props.children}
        </PlayerContext.Provider>
    )
};