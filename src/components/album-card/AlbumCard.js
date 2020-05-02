import React, { useContext, useRef, useEffect, createRef } from 'react';
import classes from './AlbumCard.module.css';
import { IpodStateContext } from '../../contexts/IpodStateContext';


const AlbumCard = (props) => {

    const { name, artist, items, thumbnail, index, styles } = props;
    let { coverflowSelectedIndex, flipCard, flipCardSelected } = useContext(IpodStateContext);

    useEffect(() => {

        if (index === coverflowSelectedIndex && flipCard) {

            sctrollToView(elementsRef.current[flipCardSelected].current)
        }
        // console.log(elementsRef);
    })

    const flip = () => {
        if (flipCard && index === coverflowSelectedIndex) {
            return {
                transform: 'rotateY(180deg) scale(1.7,1.2)',
                height: '145%'
            };
        };
    };

    const sctrollToView = (element) => {
        const scrollIntoViewOptions = { behavior: 'smooth', block: "nearest" };
        element.scrollIntoView(scrollIntoViewOptions);
    }


    const elementsRef = useRef(items.map(() => createRef()));

    window.elementsRef = elementsRef;



    return (
        <div className={classes.AlbumCard} style={styles}>
            <div className={classes.inner} style={flip()}>
                <div className={classes.front}>
                    <img src={thumbnail} alt="album img" />
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
                                    <span>{new Date(song.duration * 1000).toISOString().substr(15, 4)}</span>
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