import React, { useContext } from 'react';
import TopBar from "../top-bar/TopBar";
import AlbumCard from '../album-card/AlbumCard';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './Coverflow.module.css';


const Coverflow = () => {

    const { coverflowSelectedIndex, albums } = useContext(IpodStateContext);

    const ROTATION = 75;
    const BASE_ZINDEX = 10;
    const MAX_ZINDEX = 42;

    const styles = (index) => {

        //left side of selected
        if (index < coverflowSelectedIndex) {
            let calcSpaceBetween = index + 1 === coverflowSelectedIndex
                ? (65)
                : (65 + (23 * (coverflowSelectedIndex - (index + 1))));

            return {
                transform: `translateX(-${calcSpaceBetween}%) rotateY(${ROTATION}deg)`,
                zIndex: BASE_ZINDEX + index
            }
        };

        //selected
        if (index === coverflowSelectedIndex) {

            return {
                transform: 'rotateY(0deg)',
                zIndex: MAX_ZINDEX
            }
        };

        // right of selected
        if (index > coverflowSelectedIndex) {
            let calcSpaceBetween = index + 1 === coverflowSelectedIndex
                ? (65)
                : (65 + (23 * ((index - 1) - coverflowSelectedIndex)));

            return {
                transform: `translateX(${calcSpaceBetween}%) rotateY(-${ROTATION}deg)`,
                zIndex: BASE_ZINDEX + (albums.length - index)
            }
        };
    };

    return (
        <div className={classes.Coverflow}>
            <TopBar title='Cover Flow' />
            <div className={classes.container}>
                <div className={classes.items}>
                    {albums.map((album, index) => {
                        return (
                            <AlbumCard
                                key={index}
                                index={index}
                                styles={styles(index)}
                                name={album.name}
                                artist={album.artist}
                                items={album.items}
                                thumbnail={album.cover}
                            />
                        )
                    })}
                </div>
                <div className={classes.albumName}>
                    <span>{albums[coverflowSelectedIndex].name}</span>
                </div>
            </div>
        </div>
    )
};
export default Coverflow;