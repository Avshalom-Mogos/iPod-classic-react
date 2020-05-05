import React, { createContext, useState } from 'react';
import data from './data';

export const IpodStateContext = createContext();
export const IpodStateProvider = (props) => {
    const [ipodState, setIpodState] = useState('coverflow');
    const [isOn, setIsOn] = useState(false);
    const [albums, setAlbums] = useState(data);

    //togglers
    const [toggleScreenSaver, setToggleScreenSaver] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCoverflow, setToggleCoverflow] = useState(true);
    const [togglePlayer, setTogglePlayer] = useState(false);
    const [toggleProgressBar, setToggleProgressBar] = useState(true);
    const [toggleVolumeBar, setToggleVolumeBar] = useState(false);

    //set zindex 
    const setZindex = (stateName) => {
        if (stateName === ipodState) return '55';
        return ''
    };

    //selected
    const initialSelected = Math.floor(albums.length / 2);
    const [coverflowSelectedIndex, setCoverflowSelectedIndex] = useState(initialSelected); //change this later
    const [menuSelected, setMenuSelected] = useState(0);
    const [flipCard, setFlipCard] = useState(false);
    const [flipCardSelected, setFlipCardSelected] = useState(0);

    //player
    const initialPlayer = {
        obj: {},
        state: -1 //unstarted
    };
    const [player, setPlayer] = useState(initialPlayer);
    const [loadPlaylist, setLoadPlaylist] = useState(false);
    const [volumeLevel, setVolumeLevel] = useState(100);


    return (
        <IpodStateContext.Provider value={{
            ipodState,
            setIpodState,
            isOn,
            setIsOn,
            menuSelected,
            setMenuSelected,
            toggleScreenSaver,
            setToggleScreenSaver,
            toggleMenu,
            setToggleMenu,
            toggleCoverflow,
            setToggleCoverflow,
            togglePlayer,
            setTogglePlayer,
            coverflowSelectedIndex,
            setCoverflowSelectedIndex,
            albums,
            setAlbums,
            flipCard,
            setFlipCard,
            flipCardSelected,
            setFlipCardSelected,
            player,
            setPlayer,
            setZindex,
            loadPlaylist,
            setLoadPlaylist,
            volumeLevel,
            setVolumeLevel,
            toggleProgressBar,
            setToggleProgressBar,
            toggleVolumeBar,
            setToggleVolumeBar
        }}>
            {props.children}
        </IpodStateContext.Provider>
    )
};