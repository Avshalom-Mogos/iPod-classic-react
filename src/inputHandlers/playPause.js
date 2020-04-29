const handlePlayPauseClick = (context) => {
    const { ipodState, player } = context;

    if (ipodState === 'player') {
        if(player.state === window.YT.PlayerState.PLAYING){
            player.obj.pauseVideo()
        }else if(player.state === window.YT.PlayerState.PAUSED){
            player.obj.playVideo()
        };
    };
};
export default handlePlayPauseClick;