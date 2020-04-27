import React, { createContext, useState } from 'react';


export const IpodStateContext = createContext();
export const IpodStateProvider = (props) => {
    const [ipodState, setIpodState] = useState('screenSaver');
    const [toggleScreenSaver, setToggleScreenSaver] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCoverflow, setToggleCoverflow] = useState(false);

    const [isOn, setIsOn] = useState(false);
    return (
        <IpodStateContext.Provider value={{
            ipodState,
            setIpodState,
            isOn,
            setIsOn,
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