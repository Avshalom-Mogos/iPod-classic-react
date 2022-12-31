import * as React from 'react';
import TopBar from "../top-bar/TopBar";
import AlbumCard from '../album-card/AlbumCard';
import { IpodState, IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './Coverflow.module.css';
import { useTypedContext } from '../../hooks';
var Coverflow = function () {
    var _a = useTypedContext(IpodStateContext), ipodState = _a.ipodState, coverflowSelectedIndex = _a.coverflowSelectedIndex, albums = _a.albums, setZindex = _a.setZindex, setFlipCardSelected = _a.setFlipCardSelected;
    var ROTATION = 75;
    var BASE_ZINDEX = 10;
    var MAX_ZINDEX = 42;
    var WIDTH = 65;
    var WIDTH_AFTER_ROTATION = 23;
    React.useEffect(function () {
        setFlipCardSelected(0);
    }, [ipodState, coverflowSelectedIndex, setFlipCardSelected]);
    var styles = function (index) {
        var leftOfSelected = index < coverflowSelectedIndex;
        var selected = index === coverflowSelectedIndex;
        var rightOfSelected = index > coverflowSelectedIndex;
        if (leftOfSelected) {
            var calcSpaceBetween = index + 1 === coverflowSelectedIndex
                ? (WIDTH)
                : (WIDTH + (WIDTH_AFTER_ROTATION * (coverflowSelectedIndex - (index + 1))));
            return {
                transform: "translateX(-" + calcSpaceBetween + "%) rotateY(" + ROTATION + "deg)",
                zIndex: BASE_ZINDEX + index
            };
        }
        ;
        if (selected) {
            return {
                // transform: 'rotateY(0deg)',
                zIndex: MAX_ZINDEX
            };
        }
        ;
        if (rightOfSelected) {
            var calcSpaceBetween = index + 1 === coverflowSelectedIndex
                ? (WIDTH)
                : (WIDTH + (WIDTH_AFTER_ROTATION * ((index - 1) - coverflowSelectedIndex)));
            return {
                transform: "translateX(" + calcSpaceBetween + "%) rotateY(-" + ROTATION + "deg)",
                zIndex: BASE_ZINDEX + (albums.length - index)
            };
        }
        ;
    };
    return (React.createElement("div", { className: classes.coverflow, style: { zIndex: setZindex(IpodState.COVER_FLOW) } },
        React.createElement(TopBar, { title: 'Cover Flow' }),
        React.createElement("div", { className: classes.container },
            React.createElement("div", { className: classes.items }, albums.map(function (album, index) {
                return (React.createElement(AlbumCard, { key: index, index: index, styles: styles(index), name: album.name, artist: album.artist, items: album.items, cover: album.cover }));
            })),
            React.createElement("div", { className: classes.albumInfo },
                React.createElement("span", null, albums[coverflowSelectedIndex].name),
                React.createElement("span", null, albums[coverflowSelectedIndex].artist)))));
};
export default React.memo(Coverflow);
