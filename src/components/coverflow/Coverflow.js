import React, { useContext, useEffect, memo } from 'react';
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
        setFlipCardSelected
    } = useContext(IpodStateContext);

    const ROTATION = 75;
    const BASE_ZINDEX = 10;
    const MAX_ZINDEX = 42;
    const WIDTH = 65;
    const WIDTH_AFTER_ROTATION = 23;

    useEffect(() => {
        setFlipCardSelected(0)

    }, [ipodState, coverflowSelectedIndex, setFlipCardSelected]);


    const styles = index => {

        const leftOfSelected = index < coverflowSelectedIndex;
        const selected = index === coverflowSelectedIndex;
        const rightOfSelected = index > coverflowSelectedIndex;


        if (leftOfSelected) {
            const  calcSpaceBetween = index + 1 === coverflowSelectedIndex
                ? (WIDTH)
                : (WIDTH + (WIDTH_AFTER_ROTATION * (coverflowSelectedIndex - (index + 1))));

            return {
                transform: `translateX(-${calcSpaceBetween}%) rotateY(${ROTATION}deg)`,
                zIndex: BASE_ZINDEX + index
            }
        };

        if (selected) {

            return {
                transform: 'rotateY(0deg)',
                zIndex: MAX_ZINDEX
            }
        };

        if (rightOfSelected) {
            const  calcSpaceBetween = index + 1 === coverflowSelectedIndex
                ? (WIDTH)
                : (WIDTH + (WIDTH_AFTER_ROTATION * ((index - 1) - coverflowSelectedIndex)));

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
                                cover={album.cover}
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
export default memo(Coverflow);