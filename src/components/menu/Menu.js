import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../top-bar/TopBar';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './Menu.module.css';


const Menu = () => {
    const { menuSelected, albums } = useContext(IpodStateContext);
    const [url, setUrl] = useState('');

    useEffect(() => {
        const randIndex = Math.floor(Math.random() * albums.length);
        const url = albums[randIndex].cover;
        setUrl(url);
    }, [albums])

    return (
        <div className={classes.Menu}>
            <div className={classes.leftPanel}>
                <TopBar title='iPod' />
                <div className={classes.items}>
                    <ul>
                        <li className={menuSelected === 0 ? classes.selected : ''}>
                            <p>Music</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li className={menuSelected === 1 ? classes.selected : ''}>
                            <p>Video</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li className={menuSelected === 2 ? classes.selected : ''}>
                            <p>Photos</p>
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
export default Menu;