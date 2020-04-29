const handleForwardClick = (context) => {
    const { ipodState, player } = context;

    if (ipodState === 'player') {
        player.obj.nextVideo();
    };
};
export default handleForwardClick;