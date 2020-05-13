import React, { useContext, useEffect, useState, memo } from 'react';
import TopBar from '../top-bar/TopBar';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import { PlayerContext } from "../../contexts/PlayerContext";
import classes from './Menu.module.css';


const Menu = () => {

    const { menuSelected, albums, setZindex, setLoadPlaylist } = useContext(IpodStateContext);
    const { album } = useContext(PlayerContext);
    const [url, setUrl] = useState('');

    const setDisabled = !album.items ? { opacity: '0.5' } : {};

    useEffect(() => {

        let url = '';

        if (menuSelected === 0) {
            const randIndex = Math.floor(Math.random() * albums.length);
            url = albums[randIndex].cover;

        } else if (menuSelected === 1) {
            const randIndex = Math.floor(Math.random() * albums.length);
            url = album.cover || albums[randIndex].cover;

        } else {
            url = 'https://www.traducta.fr/wp-content/uploads/2015/10/coming-soon-logo_okok.jpg';
        };

        //show menu image
        setUrl(url);
        setLoadPlaylist(false)

    }, [albums, setLoadPlaylist, menuSelected, album.cover])

    return (
        <div className={classes.Menu} style={{ zIndex: setZindex('menu') }}>
            <div className={classes.leftPanel}>
                <TopBar title='iPod' />
                <div className={classes.items}>
                    <ul>
                        <li className={menuSelected === 0 ? classes.selected : ''}>
                            <p>Cover Flow</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li
                            className={menuSelected === 1 ? classes.selected : ''}
                            style={setDisabled}
                        >
                            <p>Now Playing</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li className={menuSelected === 2 ? classes.selected : ''}>
                            <p>Settings</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li className={menuSelected === 3 ? classes.selected : ''}>
                            <p>About</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                    </ul>
                </div>
            </div>
            <img className={classes.img} src={url} alt="selectedImg"></img>
        </div>
    )
};
export default memo(Menu);