import React, { createContext, useState } from 'react';


export const IpodStateContext = createContext();
export const IpodStateProvider = (props) => {
    const [ipodState, setIpodState] = useState('screenSaver');
    const [toggleScreenSaver, setToggleScreenSaver] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCoverflow, setToggleCoverflow] = useState(false);

    const [isOn, setIsOn] = useState(false);
    const [menuSelected, setMenuSelected] = useState(1);
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
            setToggleCoverflow
        }}>
            {props.children}
        </IpodStateContext.Provider>
    )
};