const handleOkClick = (context, playerContext) => {

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

    const { setAlbum, setSong, setSongIndex,album } = playerContext



    //change states with a delay
    if (ipodState === 'screenSaver') {
        setIsOn(true);
        setIpodState('menu');
        updateState(setToggleScreenSaver, setToggleMenu);
    } else if (ipodState === 'menu') {
        handleMenuState({
            setIpodState,
            setToggleMenu,
            setToggleCoverflow,
            setTogglePlayer,
            menuSelected,
            setLoadPlaylist,
            album
        });

    } else if (ipodState === 'coverflow') {

        if (flipCard) {

            //set player details
            setAlbum(albums[coverflowSelectedIndex]);
            setSong(albums[coverflowSelectedIndex].items[flipCardSelected]);
            setSongIndex(flipCardSelected);

            //enable playlist load
            setLoadPlaylist(true);

            //change state to player
            setIpodState('player');
            updateState(setToggleCoverflow, setTogglePlayer);
        } else {
         
            setFlipCard(!flipCard);
        };
    }
};
export default handleOkClick;

//change state and unmount prev state after a delay
const updateState = (prevState, newState) => {
    newState(true);
    setTimeout(() => {
        prevState(false);
    }, 400);
};

const handleMenuState = (props) => {

    if (props.menuSelected === 0) {

        props.setIpodState('coverflow');
        updateState(props.setToggleMenu, props.setToggleCoverflow);
    } else if (props.menuSelected === 1 && props.album.items) {

        props.setIpodState('player');
        updateState(props.setToggleMenu, props.setTogglePlayer);
    };
};
