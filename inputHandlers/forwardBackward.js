import { IpodState } from '../contexts/IpodStateContext';
var holdState = {
    active: false,
    duration: 0,
    intervalId: -1
};
export var handleForwardBackwardDown = function (context, action) {
    var ipodState = context.ipodState, player = context.player, toggleVolumeBar = context.toggleVolumeBar;
    if (ipodState === IpodState.PLAYER && !toggleVolumeBar) {
        //check for hold state
        var interval = window.setInterval(function () {
            holdState.duration++;
            holdState.active = holdState.duration > 25;
            if (holdState.active && player.obj)
                actions[action](player.obj);
        }, 10);
        holdState.intervalId = interval;
    }
    ;
};
var allowSeekAhead = true; // check this!!
var actions = {
    fastForward: function (player) { return player.seekTo(player.getCurrentTime() + 1, allowSeekAhead); },
    rewind: function (player) { return player.seekTo(player.getCurrentTime() - 1, allowSeekAhead); },
};
export var stopHoldState = function () {
    holdState.active = false;
    holdState.duration = 0;
    clearInterval(holdState.intervalId);
};
export var handleForwardBackwardUp = function (context, direction) {
    var ipodState = context.ipodState, player = context.player, coverflowSelectedIndex = context.coverflowSelectedIndex, setCoverflowSelectedIndex = context.setCoverflowSelectedIndex, albums = context.albums, flipCard = context.flipCard, toggleVolumeBar = context.toggleVolumeBar;
    if (ipodState === IpodState.PLAYER && !toggleVolumeBar) {
        // if hold state active stop it and exit function
        if (holdState.active) {
            stopHoldState();
            return;
        }
        ;
        //normal click
        stopHoldState();
        if (direction === 'right' && player.obj) {
            player.obj.nextVideo();
        }
        else if (direction === 'left' && player.obj) {
            player.obj.previousVideo();
        }
        ;
    }
    else if (ipodState === IpodState.COVER_FLOW) {
        if (direction === 'right' && coverflowSelectedIndex < albums.length - 1 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex + 1);
        }
        else if (direction === 'left' && coverflowSelectedIndex > 0 && !flipCard) {
            setCoverflowSelectedIndex(coverflowSelectedIndex - 1);
        }
        ;
    }
    ;
};
