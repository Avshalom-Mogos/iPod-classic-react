export const handleMenuClick = (context) => {

    console.log(context);
    const {
        ipodState,
        flipCard,
        setflipCard
    } = context;

    if (ipodState === 'coverflow') {
        setflipCard(!flipCard)
    };
}


export const handleOkClick = (context) => {


    const {
        ipodState,
        setIsOn,
        setIpodState,
        setToggleScreenSaver,
        setToggleMenu,
        setToggleCoverflow,
    } = context;

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

//change state and unmount prev state after a delay
const updateState = (prevState, newState) => {
    newState(true);
    setTimeout(() => {
        prevState(false);
    }, 400);
};

//wheel button events

const panMode = {
    active: false,
    speed: 15,
    direction: '',
    prevPosition: { x: 0, y: 0 }
};

let clockwiseCounter = 0;
let counterClockwiseCounter = 0;

export const handleDown = (e) => {
    panMode.active = true;
    const bounds = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - bounds.left;
    const posY = e.clientY - bounds.top;
    panMode.prevPosition.x = posX;
    panMode.prevPosition.y = posY;
};

export const StopPanMode = () => panMode.active = false;

export const handleMove = (e, context) => {
    const {
        ipodState,
        menuSelected,
        setMenuSelected,
        coverflowSelectedIndex,
        setCoverflowSelectedIndex,
        albums,
        flipCard
    } = context;


    if (panMode.active) {

        //get mouse position on the wheel
        const bounds = e.currentTarget.getBoundingClientRect() || e.offsetParent.getBoundingClientRect();
        const posX = (e.clientX || e.touches[0].clientX) - bounds.left;
        const posY = (e.clientY || e.touches[0].clientY) - bounds.top;
        const radius = bounds.width / 2;

        //check if there is no change
        if (posY - panMode.prevPosition.y === 0
            || posY - panMode.prevPosition.y === 0) {
            // console.log(panMode.direction)
            return
        };

        //get position on wheel
        // const onTop = posY <= radius;
        const onLeftSide = posX <= radius;
        const onRightSide = !onLeftSide;
        // const onBottom = !onTop;

        //get movement direction
        const panUp = posY - panMode.prevPosition.y < 0;
        const panDown = posY - panMode.prevPosition.y > 0;
        // const panLeft = posX - panMode.prevPosition.x < 0;
        // const panRight = posX - panMode.prevPosition.x > 0;

        //update prev mouse position
        panMode.prevPosition.x = posX;
        panMode.prevPosition.y = posY;

        //determine direction
        const clockwise = (onLeftSide && !panDown) || (onRightSide && !panUp);
        const counterClockwise = (onLeftSide && !panUp) || (onRightSide && !panDown);


        if (clockwise) {
            panMode.direction = 'clockwise';

            clockwiseCounter++;
            if (clockwiseCounter % panMode.speed === 0) {
                console.log("RIGHT");
                // window.navigator.vibrate([200])
                if (ipodState === 'menu' && menuSelected < 3) {
                    setMenuSelected(menuSelected + 1);
                } else if (ipodState === 'coverflow' && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
                    setCoverflowSelectedIndex(coverflowSelectedIndex + 1)
                }
            };
            return
        };

        if (counterClockwise) {
            panMode.direction = 'counterClockwise';

            counterClockwiseCounter++;
            if (counterClockwiseCounter % panMode.speed === 0) {
                console.log("LEFT");

                // navigator.vibrate(200)
                if (ipodState === 'menu' && menuSelected > 0) {
                    setMenuSelected(menuSelected - 1);
                } else if (ipodState === 'coverflow' && coverflowSelectedIndex > 0 && !flipCard) {
                    setCoverflowSelectedIndex(coverflowSelectedIndex + -1)
                }
            };
            return
        };
    };
};

