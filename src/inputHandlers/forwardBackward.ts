import { IpodContext, IpodState } from '../contexts/IpodStateContext';

const holdState = {
    active: false,
    duration: 0,
    intervalId: -1
};

export const handleForwardBackwardDown = (context: IpodContext, action: 'rewind' | 'fastForward') => {


    const { ipodState, player, toggleVolumeBar } = context;

    if (ipodState === IpodState.PLAYER && !toggleVolumeBar) {

        //check for hold state
        const interval = window.setInterval(() => {
            holdState.duration++;
            holdState.active = holdState.duration > 25;

            if (holdState.active && player.obj) actions[action](player.obj);

        }, 10);

        holdState.intervalId = interval;
    };
};

const allowSeekAhead = true; // check this - needed ??

const actions = {
    fastForward: (player: YT.Player) => player.seekTo(player.getCurrentTime() + 1, allowSeekAhead),
    rewind: (player: YT.Player) => player.seekTo(player.getCurrentTime() - 1, allowSeekAhead),
};

export const stopHoldState = () => {
    holdState.active = false;
    holdState.duration = 0;
    clearInterval(holdState.intervalId);
};

export const handleForwardBackwardUp = (context: IpodContext, direction: 'right' | 'left') => {

    const {
        ipodState,
        player,
        coverflowSelectedIndex,
        setCoverflowSelectedIndex,
        albums,
        flipCard,
        toggleVolumeBar
    } = context;

    if (ipodState === IpodState.PLAYER && !toggleVolumeBar) {

        // if hold state active stop it and exit function
        if (holdState.active) {
            stopHoldState();
            return
        };

        //normal click
        stopHoldState();
        if (direction === 'right' && player.obj) {
            player.obj.nextVideo();
        } else if (direction === 'left' && player.obj) {
            player.obj.previousVideo();
        };


    } else if (ipodState === IpodState.COVER_FLOW) {

        if (direction === 'right' && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex + 1)
        } else if (direction === 'left' && coverflowSelectedIndex > 0 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex - 1)
        };
    };
};
