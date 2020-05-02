const holdState = {
    active: false,
    duration: 0,
    intervalId: 0
};

export const handleBackwardDown = (context) => {
    // console.clear()
    const { ipodState, player } = context;

    if (ipodState === 'player') {

        //check for hold state
        holdState.intervalId = setInterval(() => {
            holdState.duration++;
            holdState.active = holdState.duration > 25 ? true : false;
            console.log('HOLD');

            if (holdState.active) rewind(player.obj);

        }, 10);
    };
};

const rewind = (player) => player.seekTo(player.getCurrentTime() - 5);


export const handleBackwardUp = (context) => {

    //reset values
    holdState.duration = 0;
    clearInterval(holdState.intervalId);

    //if hold state is active no need to continue
    if (holdState.active) {
        holdState.active = false;
        return
    };

    const {
        ipodState,
        player,
        flipCard,
        coverflowSelectedIndex,
        setCoverflowSelectedIndex
    } = context;

    if (ipodState === 'player') {
        player.obj.previousVideo();
    } else if (ipodState === 'coverflow' && coverflowSelectedIndex > 0 && !flipCard) {
        console.log("click");
        setCoverflowSelectedIndex(coverflowSelectedIndex - 1)
    }
};
