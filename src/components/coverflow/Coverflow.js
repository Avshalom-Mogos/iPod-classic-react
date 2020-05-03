import React, { useContext, useEffect } from 'react';
import TopBar from "../top-bar/TopBar";
import AlbumCard from '../album-card/AlbumCard';
import { IpodStateContext } from '../../contexts/IpodStateContext';
import classes from './Coverflow.module.css';


const Coverflow = () => {

    const {
        ipodState,
        coverflowSelectedIndex,
        albums,
        setZindex,
        setLoadPlaylist
    } = useContext(IpodStateContext);
    // 


const height = document.querySelector('body').offsetHeight;
const Width = document.querySelector('body').offsetWidth;




    // 


    const ROTATION = 75;
    const BASE_ZINDEX = 10;
    const MAX_ZINDEX = 42;

    useEffect(() => {
        setLoadPlaylist(true);
    }, [ipodState]);


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
        <div className={classes.Coverflow} style={{ zIndex: setZindex('coverflow') }}>
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
                <div className={classes.albumInfo}>
                    <span>{albums[coverflowSelectedIndex].name}</span>
                    <span>{albums[coverflowSelectedIndex].artist}</span>
                </div>
            </div>
        </div>
    )
};
export default Coverflow;