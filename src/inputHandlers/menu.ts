import { IpodContext, IpodState } from '../contexts/IpodStateContext';

const handleMenuClick = (context: IpodContext) => {

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

        case IpodState.COVER_FLOW:
            if (flipCard) {
                setFlipCard(!flipCard);
                return
            };
            setFlipCard(false);
            setIpodState(IpodState.MENU);
            updateState(setToggleCoverflow, setToggleMenu);
            break;

        case IpodState.PLAYER:

            if (toggleVolumeBar) {
                setToggleVolumeBar(!toggleVolumeBar);
                break;
            };

            setFlipCard(false);
            setIpodState(IpodState.COVER_FLOW);
            updateState(setTogglePlayer, setToggleCoverflow);
            break;

        default:
        // code block ??
    };
};

export default handleMenuClick;

type SetStateFn = (newState: boolean) => void;

//change state and unmount prev state after a delay
const updateState = (prevState: SetStateFn, newState: SetStateFn) => {
    newState(true);
    setTimeout(() => {
        prevState(false);
    }, 400);
};
