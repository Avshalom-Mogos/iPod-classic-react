const handlePlayPauseClick = (context) => {
    const { player } = context;

        if(player.state === window.YT.PlayerState.PLAYING){
            player.obj.pauseVideo()
        }else if(player.state === window.YT.PlayerState.PAUSED){
            player.obj.playVideo()
        };
};
export default handlePlayPauseClick;