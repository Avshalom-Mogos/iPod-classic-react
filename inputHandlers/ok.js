import { IpodState } from '../contexts/IpodStateContext';
var handleOkClick = function (context, playerContext) {
    var ipodState = context.ipodState, setIsOn = context.setIsOn, flipCard = context.flipCard, albums = context.albums, coverflowSelectedIndex = context.coverflowSelectedIndex, flipCardSelected = context.flipCardSelected, setFlipCard = context.setFlipCard, setIpodState = context.setIpodState, setToggleScreenSaver = context.setToggleScreenSaver, setToggleMenu = context.setToggleMenu, setToggleCoverflow = context.setToggleCoverflow, setTogglePlayer = context.setTogglePlayer, menuSelected = context.menuSelected, setLoadPlaylist = context.setLoadPlaylist;
    var setAlbum = playerContext.setAlbum, setSong = playerContext.setSong, setSongIndex = playerContext.setSongIndex, album = playerContext.album;
    //change states with a delay
    if (ipodState === IpodState.SCREEN_SAVER) {
        setIsOn(true);
        setIpodState(IpodState.MENU);
        updateState(setToggleScreenSaver, setToggleMenu);
    }
    else if (ipodState === IpodState.MENU) {
        handleMenuState({
            setIpodState: setIpodState,
            setToggleMenu: setToggleMenu,
            setToggleCoverflow: setToggleCoverflow,
            setTogglePlayer: setTogglePlayer,
            menuSelected: menuSelected,
            setLoadPlaylist: setLoadPlaylist,
            album: album
        });
    }
    else if (ipodState === IpodState.COVER_FLOW) {
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
        }
        else {
            setFlipCard(!flipCard);
        }
        ;
    }
};
export default handleOkClick;
//change state and unmount prev state after a delay
var updateState = function (prevState, newState) {
    newState(true);
    setTimeout(function () {
        prevState(false);
    }, 400);
};
var handleMenuState = function (props) {
    if (props.menuSelected === 0) {
        props.setIpodState(IpodState.COVER_FLOW);
        updateState(props.setToggleMenu, props.setToggleCoverflow);
    }
    else if (props.menuSelected === 1 && props.album.items) {
        props.setIpodState(IpodState.PLAYER);
        updateState(props.setToggleMenu, props.setTogglePlayer);
    }
    ;
};
