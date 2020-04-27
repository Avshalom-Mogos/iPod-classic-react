import React, { useContext } from 'react';
import classes from './Menu.module.css';
import TopBar from '../top-bar/TopBar';
import { IpodStateContext } from '../../contexts/IpodStateContext';


const Menu = () => {
    const { menuSelected } = useContext(IpodStateContext);
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
            <div className={classes.img}></div>
        </div>
    )
};
export default Menu;