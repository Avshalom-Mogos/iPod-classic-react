import { IpodContext, IpodState } from '../contexts/IpodStateContext';


const panMode = {
    active: false,
    speed: 20,
    direction: '',
    prevPosition: { x: 0, y: 0 }
};

let clockwiseCounter = 0;
let counterClockwiseCounter = 0;

export const handleDown = (e: any) => {
    panMode.active = true;
    const bounds = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - bounds.left;
    const posY = e.clientY - bounds.top;
    panMode.prevPosition.x = posX;
    panMode.prevPosition.y = posY;
};

export const StopPanMode = () => panMode.active = false;

export const handleMove = (e: any, context: IpodContext) => {
    const {
        ipodState,
        menuSelected,
        setMenuSelected,
        coverflowSelectedIndex,
        setCoverflowSelectedIndex,
        albums,
        flipCard,
        flipCardSelected,
        setFlipCardSelected,
        player,
        setVolumeLevel,
        toggleVolumeBar,
        setToggleVolumeBar
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

        // check for player
        if (!player.obj) return;

        if (clockwise) {
            panMode.direction = 'clockwise';

            clockwiseCounter++;
            if (clockwiseCounter % panMode.speed === 0) {

                if (ipodState === IpodState.MENU && menuSelected < 3) {
                    setMenuSelected(menuSelected + 1);
                } else if (ipodState === IpodState.COVER_FLOW && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
                    setCoverflowSelectedIndex(coverflowSelectedIndex + 1)
                } else if (ipodState === IpodState.COVER_FLOW && flipCardSelected < albums[coverflowSelectedIndex].items.length - 1 && flipCard) {
                    setFlipCardSelected(flipCardSelected + 1)
                } else if (ipodState === IpodState.PLAYER) {
                    if (!toggleVolumeBar) setToggleVolumeBar(true);
                    player.obj.setVolume(player.obj.getVolume() + 10);
                    setVolumeLevel(player.obj.getVolume());
                };
            };

        } else if (counterClockwise) {
            panMode.direction = 'counterClockwise';

            counterClockwiseCounter++;
            if (counterClockwiseCounter % panMode.speed === 0) {

                if (ipodState === IpodState.MENU && menuSelected > 0) {
                    setMenuSelected(menuSelected - 1);
                } else if (ipodState === IpodState.COVER_FLOW && coverflowSelectedIndex > 0 && !flipCard) {
                    setCoverflowSelectedIndex(coverflowSelectedIndex + -1)
                } else if (ipodState === IpodState.COVER_FLOW && flipCardSelected > 0 && flipCard) {
                    setFlipCardSelected(flipCardSelected - 1);
                } else if (ipodState === IpodState.PLAYER) {

                    if (!toggleVolumeBar) setToggleVolumeBar(true);
                    player.obj.setVolume(player.obj.getVolume() - 10);
                    setVolumeLevel(player.obj.getVolume());
                };
            };
        };
    };
};
