const holdState = {
    active: false,
    duration: 0,
    intervalId: 0
};

export const handleForwardBackwardDown = (context, action) => {

    const { ipodState, player } = context;

    if (ipodState === 'player') {

        //check for hold state
        const interval = setInterval(() => {
            holdState.duration++;
            holdState.active = holdState.duration > 25 ? true : false;

            console.log('HOLD : ', holdState.active);
            console.log('Hold Duration: ', holdState.duration);

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
        flipCard
    } = context;

    if (ipodState === 'player') {
        console.error(holdState.intervalId);

        // if hold state active stop it and exit function
        if (holdState.active) {
            stopHoldState();
            return
        };

        //normal click
        stopHoldState();
        player.obj.nextVideo();

    } else if (ipodState === 'coverflow') {

        if (direction === 'right' && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex + 1)
        } else if (direction === 'left' && coverflowSelectedIndex > 0 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex - 1)
        }

    };
};


