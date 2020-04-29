const handleBackwardClick = (context) => {
    const { ipodState, player } = context;

    if (ipodState === 'player') {
        player.obj.previousVideo();
    };
};
export default handleBackwardClick;