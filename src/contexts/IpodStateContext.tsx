import * as React from 'react';
import { Album, albumsData } from './data';
import * as Youtube from 'react-youtube';
import { MenuItem } from '../components/menu/Menu';

export type IpodContext = {
    ipodState: IpodState;
    setIpodState: React.Dispatch<React.SetStateAction<IpodState>>;
    isOn: boolean;
    setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
    menuSelected: MenuItem;
    setMenuSelected: React.Dispatch<React.SetStateAction<MenuItem>>;
    toggleScreenSaver: boolean;
    setToggleScreenSaver: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMenu: boolean;
    setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
    toggleCoverflow: boolean;
    setToggleCoverflow: React.Dispatch<React.SetStateAction<boolean>>;
    togglePlayer: boolean;
    setTogglePlayer: React.Dispatch<boolean>;
    coverflowSelectedIndex: number;
    setCoverflowSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    albums: Album[];
    setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
    flipCard: boolean;
    setFlipCard: React.Dispatch<React.SetStateAction<boolean>>;
    flipCardSelected: number;
    setFlipCardSelected: React.Dispatch<React.SetStateAction<number>>;
    player: Player;
    setPlayer: React.Dispatch<React.SetStateAction<Player>>;
    getZindexValue: (state: IpodState) => '55' | '';
    loadPlaylist: boolean;
    setLoadPlaylist: React.Dispatch<React.SetStateAction<boolean>>;
    volumeLevel: number;
    setVolumeLevel: React.Dispatch<React.SetStateAction<number>>;
    toggleProgressBar: boolean;
    setToggleProgressBar: React.Dispatch<React.SetStateAction<boolean>>;
    toggleVolumeBar: boolean;
    setToggleVolumeBar: React.Dispatch<React.SetStateAction<boolean>>;
};

type Player = {
    obj: YT.Player | null;
    state: number;
};

export enum IpodState {
    SCREEN_SAVER,
    MENU,
    COVER_FLOW,
    PLAYER
};

type IpodStateProviderProps = React.PropsWithChildren;

export const IpodStateContext = React.createContext<IpodContext | null>(null);

export const IpodStateProvider = (props: IpodStateProviderProps) => {
    const [ipodState, setIpodState] = React.useState<IpodState>(IpodState.SCREEN_SAVER);
    const [isOn, setIsOn] = React.useState(false);
    const [albums, setAlbums] = React.useState(albumsData);

    //togglers
    const [toggleScreenSaver, setToggleScreenSaver] = React.useState(true);
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [toggleCoverflow, setToggleCoverflow] = React.useState(false);
    const [togglePlayer, setTogglePlayer] = React.useState(false);
    const [toggleProgressBar, setToggleProgressBar] = React.useState(true);
    const [toggleVolumeBar, setToggleVolumeBar] = React.useState(false);

    //set zindex
    const getZindexValue = (stateName: IpodState) => {
        if (stateName === ipodState) return '55';
        return '';
    };

    //selected
    const initialSelected = Math.floor(albums.length / 2);
    const [coverflowSelectedIndex, setCoverflowSelectedIndex] = React.useState(initialSelected); //change this later
    const [menuSelected, setMenuSelected] = React.useState(MenuItem.COVER_FLOW);
    const [flipCard, setFlipCard] = React.useState(false);
    const [flipCardSelected, setFlipCardSelected] = React.useState(0);

    //player
    const initialPlayer: Player = {
        obj: null,
        state: Youtube.default.PlayerState.UNSTARTED,
    };
    const [player, setPlayer] = React.useState(initialPlayer);
    const [loadPlaylist, setLoadPlaylist] = React.useState(false);
    const [volumeLevel, setVolumeLevel] = React.useState(50);

    return (
        <IpodStateContext.Provider
            value={{
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
                getZindexValue,
                loadPlaylist,
                setLoadPlaylist,
                volumeLevel,
                setVolumeLevel,
                toggleProgressBar,
                setToggleProgressBar,
                toggleVolumeBar,
                setToggleVolumeBar,
            }}
        >
            {props.children}
        </IpodStateContext.Provider>
    );
};
