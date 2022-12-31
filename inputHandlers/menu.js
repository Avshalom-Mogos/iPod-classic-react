import { IpodState } from '../contexts/IpodStateContext';
var handleMenuClick = function (context) {
    var ipodState = context.ipodState, setIpodState = context.setIpodState, flipCard = context.flipCard, setFlipCard = context.setFlipCard, setTogglePlayer = context.setTogglePlayer, setToggleCoverflow = context.setToggleCoverflow, setToggleMenu = context.setToggleMenu, toggleVolumeBar = context.toggleVolumeBar, setToggleVolumeBar = context.setToggleVolumeBar;
    switch (ipodState) {
        case IpodState.COVER_FLOW:
            if (flipCard) {
                setFlipCard(!flipCard);
                return;
            }
            ;
            setFlipCard(false);
            setIpodState(IpodState.MENU);
            updateState(setToggleCoverflow, setToggleMenu);
            break;
        case IpodState.PLAYER:
            if (toggleVolumeBar) {
                setToggleVolumeBar(!toggleVolumeBar);
                break;
            }
            ;
            setFlipCard(false);
            setIpodState(IpodState.COVER_FLOW);
            updateState(setTogglePlayer, setToggleCoverflow);
            break;
        default:
        // code block ??
    }
    ;
};
export default handleMenuClick;
//change state and unmount prev state after a delay
var updateState = function (prevState, newState) {
    newState(true);
    setTimeout(function () {
        prevState(false);
    }, 400);
};
