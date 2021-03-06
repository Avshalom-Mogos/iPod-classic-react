const handleMenuClick = (context) => {

    const {
        ipodState,
        setIpodState,
        flipCard,
        setFlipCard,
        setTogglePlayer,
        setToggleCoverflow,
        setToggleMenu,
        toggleVolumeBar,
        setToggleVolumeBar
    } = context;

    switch (ipodState) {

        case 'coverflow':
            if (flipCard) {
                setFlipCard(!flipCard);
                return
            };
            setFlipCard(false);
            setIpodState('menu');
            updateState(setToggleCoverflow, setToggleMenu);
            break;

        case 'player':

            if(toggleVolumeBar){
                setToggleVolumeBar(!toggleVolumeBar);
                break;
            };

            setFlipCard(false);
            setIpodState('coverflow');
            updateState(setTogglePlayer, setToggleCoverflow);
            break;
            
        default:
        // code block ??
    };
};
export default handleMenuClick;

//change state and unmount prev state after a delay
const updateState = (prevState, newState) => {
    newState(true);
    setTimeout(() => {
        prevState(false);
    }, 400);
};