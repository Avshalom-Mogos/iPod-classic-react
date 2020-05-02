const handleOkClick = (context) => {

    const {
        ipodState,
        setIsOn,
        flipCard,
        setFlipCard,
        setIpodState,
        setToggleScreenSaver,
        setToggleMenu,
        setToggleCoverflow,
        setTogglePlayer,
        menuSelected,
        setLoadPlaylist
    } = context;

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
            setLoadPlaylist
        });

    } else if (ipodState === 'coverflow') {

        if (flipCard) {
            setIpodState('player');
            updateState(setToggleCoverflow, setTogglePlayer);
        } else {
            // setFlipCardSelected(0);
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

    console.log(props);
  

    if (props.menuSelected === 0) {
        props.setIpodState('coverflow');
        updateState(props.setToggleMenu, props.setToggleCoverflow);
    } else if (props.menuSelected === 1) {
        props.setLoadPlaylist(false);
        props.setIpodState('player');
       updateState(props.setToggleMenu, props.setTogglePlayer);
    };
};
