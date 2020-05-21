const holdState = {
    active: false,
    duration: 0,
    intervalId: 0
};

export const handleForwardBackwardDown = (context, action) => {


    const { ipodState, player, toggleVolumeBar } = context;

    if (ipodState === 'player' && !toggleVolumeBar) {

        //check for hold state
        const interval = setInterval(() => {
            holdState.duration++;
            holdState.active = holdState.duration > 25 ? true : false;

            if (holdState.active) actions[action](player.obj);

        }, 10);

        holdState.intervalId = interval;
    };
};

const actions = {
    fastForward: (player) => player.seekTo(player.getCurrentTime() + 1),
    rewind: (player) => player.seekTo(player.getCurrentTime() - 1),
};

export const stopHoldState = () => {
    holdState.active = false;
    holdState.duration = 0;
    clearInterval(holdState.intervalId);
};

export const handleForwardBackwardUp = (context, direction) => {

    const {
        ipodState,
        player,
        coverflowSelectedIndex,
        setCoverflowSelectedIndex,
        albums,
        flipCard,
        toggleVolumeBar
    } = context;

    if (ipodState === 'player' && !toggleVolumeBar) {

        // if hold state active stop it and exit function
        if (holdState.active) {
            stopHoldState();
            return
        };

        //normal click
        stopHoldState();
        if (direction === 'right')  {
            player.obj.nextVideo();
        } else if (direction === 'left') {
            player.obj.previousVideo();
        };
      

    } else if (ipodState === 'coverflow') {

        if (direction === 'right' && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex + 1)
        } else if (direction === 'left' && coverflowSelectedIndex > 0 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex - 1)
        };
    };
};


