import { MenuItem } from '../components/menu/Menu';
import { IpodContext, IpodState } from '../contexts/IpodStateContext';
import { PlayerContextApi } from '../contexts/PlayerContext';

const handleOkClick = (context: IpodContext, playerContext: PlayerContextApi) => {

    const {
        ipodState,
        setIsOn,
        flipCard,
        albums,
        coverflowSelectedIndex,
        flipCardSelected,
        setFlipCard,
        setIpodState,
        setToggleScreenSaver,
        setToggleMenu,
        setToggleCoverflow,
        setTogglePlayer,
        menuSelected,
        setLoadPlaylist
    } = context;

    const { setAlbum, setSong, setSongIndex, album } = playerContext



    //change states with a delay
    if (ipodState === IpodState.SCREEN_SAVER) {
        setIsOn(true);
        setIpodState(IpodState.MENU);
        updateState(setToggleScreenSaver, setToggleMenu);
    } else if (ipodState === IpodState.MENU) {
        handleMenuState({
            setIpodState,
            setToggleMenu,
            setToggleCoverflow,
            setTogglePlayer,
            menuSelected,
            setLoadPlaylist,
            album
        });

    } else if (ipodState === IpodState.COVER_FLOW) {

        if (flipCard) {

            //set player details
            setAlbum(albums[coverflowSelectedIndex]);
            setSong(albums[coverflowSelectedIndex].items[flipCardSelected]);
            setSongIndex(flipCardSelected);

            //enable playlist load
            setLoadPlaylist(true);

            //change state to player
            setIpodState(IpodState.PLAYER);
            updateState(setToggleCoverflow, setTogglePlayer);
        } else {

            setFlipCard(!flipCard);
        };
    }
};
export default handleOkClick;

type SetStateFn = (newState: boolean) => void;

//change state and unmount prev state after a delay
const updateState = (prevState: SetStateFn, newState: SetStateFn) => {
    newState(true);
    setTimeout(() => {
        prevState(false);
    }, 400);
};

type handleMenuStateProps = {
    setIpodState: IpodContext['setIpodState'],
    setToggleMenu: IpodContext['setToggleMenu'],
    setToggleCoverflow: IpodContext['setToggleCoverflow'],
    setTogglePlayer: IpodContext['setTogglePlayer'],
    menuSelected: IpodContext['menuSelected'],
    setLoadPlaylist: IpodContext['setLoadPlaylist'],
    album: PlayerContextApi['album']
};

const handleMenuState = (props: handleMenuStateProps) => {

    if (props.menuSelected === MenuItem.COVER_FLOW) {

        props.setIpodState(IpodState.COVER_FLOW);
        updateState(props.setToggleMenu, props.setToggleCoverflow);
    } else if (props.menuSelected === MenuItem.NOW_PLAYING && props.album?.items) {

        props.setIpodState(IpodState.PLAYER);
        updateState(props.setToggleMenu, props.setTogglePlayer);
    };
};
