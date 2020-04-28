import React, { createContext, useState } from 'react';
import { data } from '../components/coverflow/data';

export const IpodStateContext = createContext();
export const IpodStateProvider = (props) => {
    const [ipodState, setIpodState] = useState('coverflow');
    const [toggleScreenSaver, setToggleScreenSaver] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCoverflow, setToggleCoverflow] = useState(true);

    const [isOn, setIsOn] = useState(false);
    const [menuSelected, setMenuSelected] = useState(0);
    const [coverflowSelectedIndex, setCoverflowSelectedIndex] = useState(3);
    const [albums, setAlbums] = useState([...data]);
    const [flipCard, setflipCard] = useState(false);


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
            coverflowSelectedIndex,
            setCoverflowSelectedIndex,
            albums,
            setAlbums,
            flipCard,
            setflipCard
        }}>
            {props.children}
        </IpodStateContext.Provider>
    )
};