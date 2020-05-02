const holdState = {
    active: false,
    duration: 0,
    intervalId: 0
};

export const handleForwardDown = (context) => {

    const { ipodState, player } = context;

    if (ipodState === 'player') {

        //check for hold state
        holdState.intervalId = setInterval(() => {
            holdState.duration++;
            holdState.active = holdState.duration > 25 ? true : false;
            console.log('HOLD');
            console.log(holdState.active);
            console.log(holdState.duration);
            console.log(player.obj);

            if (holdState.active) fastForward(player.obj);

        }, 10);
    };
};

const fastForward = (player) => player.seekTo(player.getCurrentTime() + 5);



export const handleForwardUp = (context) => {
    console.error("handleForwardUp");

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
        coverflowSelectedIndex,
        setCoverflowSelectedIndex,
        albums,
        flipCard
    } = context;



    if (ipodState === 'player') {
        player.obj.nextVideo();
    } else if (ipodState === 'coverflow' && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
        setCoverflowSelectedIndex(coverflowSelectedIndex + 1)
    };
};


