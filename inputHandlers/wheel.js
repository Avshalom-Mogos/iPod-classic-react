import { IpodState } from '../contexts/IpodStateContext';
var panMode = {
    active: false,
    speed: 20,
    direction: '',
    prevPosition: { x: 0, y: 0 }
};
var clockwiseCounter = 0;
var counterClockwiseCounter = 0;
export var handleDown = function (e) {
    panMode.active = true;
    var bounds = e.currentTarget.getBoundingClientRect();
    var posX = e.clientX - bounds.left;
    var posY = e.clientY - bounds.top;
    panMode.prevPosition.x = posX;
    panMode.prevPosition.y = posY;
};
export var StopPanMode = function () { return panMode.active = false; };
export var handleMove = function (e, context) {
    var ipodState = context.ipodState, menuSelected = context.menuSelected, setMenuSelected = context.setMenuSelected, coverflowSelectedIndex = context.coverflowSelectedIndex, setCoverflowSelectedIndex = context.setCoverflowSelectedIndex, albums = context.albums, flipCard = context.flipCard, flipCardSelected = context.flipCardSelected, setFlipCardSelected = context.setFlipCardSelected, player = context.player, setVolumeLevel = context.setVolumeLevel, toggleVolumeBar = context.toggleVolumeBar, setToggleVolumeBar = context.setToggleVolumeBar;
    if (panMode.active) {
        //get mouse position on the wheel
        var bounds = e.currentTarget.getBoundingClientRect() || e.offsetParent.getBoundingClientRect();
        var posX = (e.clientX || e.touches[0].clientX) - bounds.left;
        var posY = (e.clientY || e.touches[0].clientY) - bounds.top;
        var radius = bounds.width / 2;
        //check if there is no change
        if (posY - panMode.prevPosition.y === 0
            || posY - panMode.prevPosition.y === 0) {
            return;
        }
        ;
        //get position on wheel
        // const onTop = posY <= radius;
        var onLeftSide = posX <= radius;
        var onRightSide = !onLeftSide;
        // const onBottom = !onTop;
        //get movement direction
        var panUp = posY - panMode.prevPosition.y < 0;
        var panDown = posY - panMode.prevPosition.y > 0;
        // const panLeft = posX - panMode.prevPosition.x < 0;
        // const panRight = posX - panMode.prevPosition.x > 0;
        //update prev mouse position
        panMode.prevPosition.x = posX;
        panMode.prevPosition.y = posY;
        //determine direction
        var clockwise = (onLeftSide && !panDown) || (onRightSide && !panUp);
        var counterClockwise = (onLeftSide && !panUp) || (onRightSide && !panDown);
        // check for player
        if (!player.obj)
            return;
        if (clockwise) {
            panMode.direction = 'clockwise';
            clockwiseCounter++;
            if (clockwiseCounter % panMode.speed === 0) {
                if (ipodState === IpodState.MENU && menuSelected < 3) {
                    setMenuSelected(menuSelected + 1);
                }
                else if (ipodState === IpodState.COVER_FLOW && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
                    setCoverflowSelectedIndex(coverflowSelectedIndex + 1);
                }
                else if (ipodState === IpodState.COVER_FLOW && flipCardSelected < albums[coverflowSelectedIndex].items.length - 1 && flipCard) {
                    setFlipCardSelected(flipCardSelected + 1);
                }
                else if (ipodState === IpodState.PLAYER) {
                    if (!toggleVolumeBar)
                        setToggleVolumeBar(true);
                    player.obj.setVolume(player.obj.getVolume() + 10);
                    setVolumeLevel(player.obj.getVolume());
                }
                ;
            }
            ;
        }
        else if (counterClockwise) {
            panMode.direction = 'counterClockwise';
            counterClockwiseCounter++;
            if (counterClockwiseCounter % panMode.speed === 0) {
                if (ipodState === IpodState.MENU && menuSelected > 0) {
                    setMenuSelected(menuSelected - 1);
                }
                else if (ipodState === IpodState.COVER_FLOW && coverflowSelectedIndex > 0 && !flipCard) {
                    setCoverflowSelectedIndex(coverflowSelectedIndex + -1);
                }
                else if (ipodState === IpodState.COVER_FLOW && flipCardSelected > 0 && flipCard) {
                    setFlipCardSelected(flipCardSelected - 1);
                }
                else if (ipodState === IpodState.PLAYER) {
                    if (!toggleVolumeBar)
                        setToggleVolumeBar(true);
                    player.obj.setVolume(player.obj.getVolume() - 10);
                    setVolumeLevel(player.obj.getVolume());
                }
                ;
            }
            ;
        }
        ;
    }
    ;
};
