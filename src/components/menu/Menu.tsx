import * as React from 'react';
import TopBar from '../top-bar/TopBar';
import { IpodState, IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from "../../contexts/PlayerContext";
import classes from './Menu.module.css';
import { useTypedContext } from '../../hooks';
import { classNames, getPublicImagePath } from '../../utils';

export enum MenuItem {
    COVER_FLOW,
    NOW_PLAYING,
    SETTINGS,
    ABOUT
};

const COMING_SOON = 'https://www.traducta.fr/wp-content/uploads/2015/10/coming-soon-logo_okok.jpg';

const Menu: React.FC<{}> = () => {

    const { menuSelected, albums, getZindexValue } = useTypedContext(IpodStateContext);
    const { album } = useTypedContext(PlayerContext);

    const hasAlbumLoaded = album?.items;

    const getRandomAlbumCover = () => {
        const randIndex = Math.floor(Math.random() * albums.length);
        const { cover } = albums[randIndex];
        return cover;
    };

    const getMenuCover = () => {
        switch (menuSelected) {
            case MenuItem.COVER_FLOW:
            case MenuItem.NOW_PLAYING:
                return album?.cover || getRandomAlbumCover();
            default:
                return COMING_SOON;
        }
    };

    const isMenuItemSelected = (menuItem: MenuItem) => menuSelected === menuItem;

    return (
        <div className={classes.menu} style={{ zIndex: getZindexValue(IpodState.MENU) }}>
            <div className={classes.leftPanel}>
                <TopBar title='iPod' />
                <div className={classes.items}>
                    <ul>
                        <li className={classNames({ [classes.selected]: isMenuItemSelected(MenuItem.COVER_FLOW) })}>
                            <p>Cover Flow</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li
                            className={classNames({
                                [classes.selected]: isMenuItemSelected(MenuItem.NOW_PLAYING),
                                [classes.disabled]: !hasAlbumLoaded
                            })}
                        >
                            <p>Now Playing</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li className={classNames({ [classes.selected]: isMenuItemSelected(MenuItem.SETTINGS) })}>
                            <p>Settings</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li className={classNames({ [classes.selected]: isMenuItemSelected(MenuItem.ABOUT) })}>
                            <p>About</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                    </ul>
                </div>
            </div>
            <img className={classes.img} src={getPublicImagePath(getMenuCover())} alt="selectedImg"></img>
        </div>
    )
};

export default React.memo(Menu);
