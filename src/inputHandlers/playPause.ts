import { IpodContext } from '../contexts/IpodStateContext';

const handlePlayPauseClick = (context: IpodContext) => {
    const { player } = context;

    if (player.state === YT.PlayerState.PLAYING) {
        player?.obj?.pauseVideo()
    } else if (player.state === YT.PlayerState.PAUSED) {
        player?.obj?.playVideo()
    };
};

export default handlePlayPauseClick;
