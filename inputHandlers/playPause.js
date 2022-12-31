var handlePlayPauseClick = function (context) {
    var _a, _b;
    var player = context.player;
    if (player.state === YT.PlayerState.PLAYING) {
        (_a = player === null || player === void 0 ? void 0 : player.obj) === null || _a === void 0 ? void 0 : _a.pauseVideo();
    }
    else if (player.state === YT.PlayerState.PAUSED) {
        (_b = player === null || player === void 0 ? void 0 : player.obj) === null || _b === void 0 ? void 0 : _b.playVideo();
    }
    ;
};
export default handlePlayPauseClick;
