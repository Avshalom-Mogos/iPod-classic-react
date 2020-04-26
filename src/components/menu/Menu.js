import React from 'react';
import classes from './Menu.module.css';
import TopBar from '../top-bar/TopBar';


const Menu = () => {
    return (
        <div className={classes.Menu}>
            <div className={classes.leftPanel}>
                <TopBar title='iPod' />
                <div className={classes.items}>
                    <ul>
                        <li>
                            <p>Music</p>
                            <i className='fas fa-chevron-right'></i>
                        </li>
                        <li>
                            <p>Video</p>
                        </li>
                        <li>
                            <p>Photos</p>
                        </li>
                        <li className={classes.selected}>
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