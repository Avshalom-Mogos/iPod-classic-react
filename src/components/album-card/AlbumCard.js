import React, { useContext } from 'react';
import classes from './AlbumCard.module.css';
import { IpodStateContext } from '../../contexts/IpodStateContext';


const AlbumCard = (props) => {

    const { title, items, thumbnail, index, styles } = props;
    let { coverflowSelectedIndex, flipCard } = useContext(IpodStateContext);

    const flip = () => {
        if (flipCard && index === coverflowSelectedIndex) {
            return {
                transform: 'rotateY(180deg) scale(1.7,1.2)',
                height: '145%'
            };
        };
    };

    return (
        <div className={classes.AlbumCard} style={styles}>
            <div className={classes.inner} style={flip()}>
                <div className={classes.front}>
                    <img src={thumbnail} alt="album img" />
                </div>
                <div className={classes.back}>
                    <div className={classes.albumName}>
                        <span>{title}</span>
                    </div>
                    <ul>
                        {items.map((song, index) => {
                            return (
                                <li key={index}>
                                    <span>{song.title}</span>
                                    <span>{song.duration}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default AlbumCard;