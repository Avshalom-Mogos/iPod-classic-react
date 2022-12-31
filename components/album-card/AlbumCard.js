import * as React from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import classes from './AlbumCard.module.css';
var AlbumCard = function (props) {
    var name = props.name, artist = props.artist, items = props.items, cover = props.cover, index = props.index, styles = props.styles;
    var _a = useTypedContext(IpodStateContext), coverflowSelectedIndex = _a.coverflowSelectedIndex, flipCard = _a.flipCard, flipCardSelected = _a.flipCardSelected;
    React.useEffect(function () {
        var selectedCard = elementsRef.current[flipCardSelected].current;
        if (index === coverflowSelectedIndex && flipCard && selectedCard) {
            //scroll to flip card scelcted
            scrollToView(selectedCard);
        }
        ;
    });
    var flip = (flipCard && index === coverflowSelectedIndex) ? classes.flip : '';
    // duplicate ???
    var formatTime = function (time) {
        // if song duration is over 10min show 5 char string
        return time >= 600 ?
            new Date(time * 1000).toISOString().substr(14, 5)
            :
                new Date(time * 1000).toISOString().substr(15, 4);
    };
    var scrollToView = function (element) {
        var scrollIntoViewOptions = { behavior: 'smooth', block: "nearest" };
        element.scrollIntoView(scrollIntoViewOptions);
    };
    var elementsRef = React.useRef(items.map(function () { return React.createRef(); }));
    return (React.createElement("div", { className: classes.albumCard, style: styles },
        React.createElement("div", { className: classes.inner + " " + flip },
            React.createElement("div", { className: classes.front },
                React.createElement("img", { src: cover, alt: "albumImg" })),
            React.createElement("div", { className: classes.back },
                React.createElement("div", { className: classes.albumInfo },
                    React.createElement("div", { className: classes.albumInfoName }, name),
                    React.createElement("div", { className: classes.albumInfoArtist }, artist)),
                React.createElement("ul", null, items.map(function (song, i) {
                    return (React.createElement("li", { key: i, className: i === flipCardSelected ? classes.selected : '', ref: elementsRef.current[i] },
                        React.createElement("span", null, song.title),
                        React.createElement("span", null, formatTime(song.duration))));
                }))))));
};
export default React.memo(AlbumCard);
