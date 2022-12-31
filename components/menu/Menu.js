import * as React from 'react';
import TopBar from '../top-bar/TopBar';
import { IpodState, IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from "../../contexts/PlayerContext";
import classes from './Menu.module.css';
import { useTypedContext } from '../../hooks';
var MenuSection;
(function (MenuSection) {
    MenuSection[MenuSection["COVER_FLOW"] = 0] = "COVER_FLOW";
    MenuSection[MenuSection["NOW_PLAYING"] = 1] = "NOW_PLAYING";
    MenuSection[MenuSection["SETTINGS"] = 2] = "SETTINGS";
    MenuSection[MenuSection["ABOUT"] = 3] = "ABOUT";
})(MenuSection || (MenuSection = {}));
;
var Menu = function () {
    var _a = useTypedContext(IpodStateContext), menuSelected = _a.menuSelected, albums = _a.albums, setZindex = _a.setZindex, setLoadPlaylist = _a.setLoadPlaylist;
    var album = useTypedContext(PlayerContext).album;
    var _b = React.useState(''), url = _b[0], setUrl = _b[1];
    var setDisabled = !album.items ? { opacity: '0.5' } : {};
    var getRandomAlbumCover = function () {
        var randIndex = Math.floor(Math.random() * albums.length);
        var cover = albums[randIndex].cover;
        return cover;
    };
    React.useEffect(function () {
        var url = '';
        switch (menuSelected) {
            case MenuSection.COVER_FLOW:
                url = getRandomAlbumCover();
                break;
            case MenuSection.NOW_PLAYING:
                url = album.cover || getRandomAlbumCover();
                break;
            default:
                url = 'https://www.traducta.fr/wp-content/uploads/2015/10/coming-soon-logo_okok.jpg';
        }
        //show menu image
        setUrl(url);
        setLoadPlaylist(false);
    }, [albums, setLoadPlaylist, menuSelected, album.cover]);
    return (React.createElement("div", { className: classes.menu, style: { zIndex: setZindex(IpodState.MENU) } },
        React.createElement("div", { className: classes.leftPanel },
            React.createElement(TopBar, { title: 'iPod' }),
            React.createElement("div", { className: classes.items },
                React.createElement("ul", null,
                    React.createElement("li", { className: menuSelected === 0 ? classes.selected : '' },
                        React.createElement("p", null, "Cover Flow"),
                        React.createElement("i", { className: 'fas fa-chevron-right' })),
                    React.createElement("li", { className: menuSelected === 1 ? classes.selected : '', style: setDisabled },
                        React.createElement("p", null, "Now Playing"),
                        React.createElement("i", { className: 'fas fa-chevron-right' })),
                    React.createElement("li", { className: menuSelected === 2 ? classes.selected : '' },
                        React.createElement("p", null, "Settings"),
                        React.createElement("i", { className: 'fas fa-chevron-right' })),
                    React.createElement("li", { className: menuSelected === 3 ? classes.selected : '' },
                        React.createElement("p", null, "About"),
                        React.createElement("i", { className: 'fas fa-chevron-right' }))))),
        React.createElement("img", { className: classes.img, src: url, alt: "selectedImg" })));
};
export default React.memo(Menu);
