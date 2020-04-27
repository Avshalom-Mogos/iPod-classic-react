export const handleOkClick = (objects) => {

    console.log(objects.ipodState);

    const {
        ipodState,
        setIsOn,
        setIpodState,
        setToggleScreenSaver,
        setToggleMenu,
        setToggleCoverflow,
    } = objects;

    if (ipodState === 'screenSaver') {
        setIsOn(true);
        setIpodState('menu');
        updateState(setToggleScreenSaver, setToggleMenu);
        // setIsOn(false);
    } else if (ipodState === 'menu') {
        setIpodState('coverflow');
        updateState(setToggleMenu, setToggleCoverflow);
    };
};


const updateState = (prevState, newState) => {
    newState(true);
    setTimeout(() => {
        prevState(false);
    }, 400);
};