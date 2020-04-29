import React, { createContext, useState } from 'react';
import data from './data';

export const IpodStateContext = createContext();
export const IpodStateProvider = (props) => {
    const [ipodState, setIpodState] = useState('player');

    //togglers
    const [toggleScreenSaver, setToggleScreenSaver] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCoverflow, setToggleCoverflow] = useState(false);
    const [togglePlayer, setTogglePlayer] = useState(true);

    const [isOn, setIsOn] = useState(false);
    const [menuSelected, setMenuSelected] = useState(0);
    const [coverflowSelectedIndex, setCoverflowSelectedIndex] = useState(3);
    const [albums, setAlbums] = useState(data);
    const [flipCard, setFlipCard] = useState(false);
    const [flipCardSelected, setFlipCardSelected] = useState(0);


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
            setFlipCardSelected
        }}>
            {props.children}
        </IpodStateContext.Provider>
    )
};