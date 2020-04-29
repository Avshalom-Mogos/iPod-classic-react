const handleOkClick = (context) => {

    const {
        ipodState,
        setIsOn,
        flipCard,
        setIpodState,
        setToggleScreenSaver,
        setToggleMenu,
        setToggleCoverflow,
        setTogglePlayer
    } = context;

    //change states with a delay
    if (ipodState === 'screenSaver') {
        setIsOn(true);
        setIpodState('menu');
        updateState(setToggleScreenSaver, setToggleMenu);
    } else if (ipodState === 'menu') {
        setIpodState('coverflow');
        updateState(setToggleMenu, setToggleCoverflow);
    } else if (ipodState === 'coverflow' && flipCard) {
        setIpodState('player');
        updateState(setToggleCoverflow, setTogglePlayer);
    };
};

//change state and unmount prev state after a delay
const updateState = (prevState, newState) => {
    newState(true);
    setTimeout(() => {
        prevState(false);
    }, 400);
};
export default handleOkClick;