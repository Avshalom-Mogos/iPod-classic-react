import React, { useContext, useRef, useEffect, createRef, memo } from 'react';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './AlbumCard.module.css';


const AlbumCard = (props) => {

    const { name, artist, items, cover, index, styles } = props;
    const { coverflowSelectedIndex, flipCard, flipCardSelected } = useContext(IpodStateContext);

    useEffect(() => {

        if (index === coverflowSelectedIndex && flipCard) {
            //scroll to flip card scelcted
            sctrollToView(elementsRef.current[flipCardSelected].current)
        };
    })

    const flip = (flipCard && index === coverflowSelectedIndex) ? classes.flip : '';

    const formatTime = time => {
        // if song duration is over 10min show 5 char string
        return time >= 600 ?
            new Date(time * 1000).toISOString().substr(14, 5)
            :
            new Date(time * 1000).toISOString().substr(15, 4)
    };

    const sctrollToView = (element) => {
        const scrollIntoViewOptions = { behavior: 'smooth', block: "nearest" };
        element.scrollIntoView(scrollIntoViewOptions);
    };

    const elementsRef = useRef(items.map(() => createRef()));

    return (
        <div className={classes.AlbumCard} style={styles}>
            <div className={`${classes.inner} ${flip}`}>
                <div className={classes.front}>
                    <img src={cover} alt="albumImg" />
                </div>
                <div className={classes.back}>
                    <div className={classes.albumInfo}>
                        <div className={classes.albumInfoName}>{name}</div>
                        <div className={classes.albumInfoArtist}>{artist}</div>
                    </div>
                    <ul>
                        {items.map((song, i) => {
                            return (
                                <li
                                    key={i}
                                    className={i === flipCardSelected ? classes.selected : ''}
                                    ref={elementsRef.current[i]}
                                >
                                    <span>{song.title}</span>
                                    <span>{formatTime(song.duration)}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div >
    )
};
export default memo(AlbumCard);