import * as React from 'react';
import { Song } from '../../contexts/data';
import { IpodContext, IpodStateContext } from '../../contexts/IpodStateContext';
import { useTypedContext } from '../../hooks';
import { classNames, getPublicImagePath } from '../../utils';
import classes from './AlbumCard.module.css';


type AlbumCardProps = {
    index: number;
    styles: {
        transform: string;
        zIndex: number;
    } | {
        zIndex: number;
        transform?: undefined;
    } | undefined;
    name: string;
    artist: string;
    items: Song[];
    cover: string;
};

const AlbumCard: React.FC<AlbumCardProps> = props => {

    const { name, artist, items, cover, index, styles } = props;
    const { coverflowSelectedIndex, flipCard, flipCardSelected } = useTypedContext<IpodContext>(IpodStateContext);

    React.useEffect(() => {
        const selectedCard = elementsRef.current[flipCardSelected].current;
        if (index === coverflowSelectedIndex && flipCard && selectedCard) {
            //scroll to flip card scelcted
            scrollToView(selectedCard);
        };
    })

    // duplicate ???
    const formatTime = (time: number) => {
        // if song duration is over 10min show 5 char string
        return time >= 600 ?
            new Date(time * 1000).toISOString().substr(14, 5)
            :
            new Date(time * 1000).toISOString().substr(15, 4)
    };

    const scrollToView = (element: HTMLLIElement) => {
        const scrollIntoViewOptions: ScrollIntoViewOptions = { behavior: 'smooth', block: "nearest" };
        element.scrollIntoView(scrollIntoViewOptions);
    };

    const elementsRef = React.useRef(items.map(() => React.createRef<HTMLLIElement>()));

    return (
        <div className={classes.albumCard} style={styles}>
            <div className={classNames(classes.inner, { [classes.flip]: flipCard && index === coverflowSelectedIndex })}>
                <div className={classes.front}>
                    <img src={getPublicImagePath(cover)} alt="albumImg" />
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
                                    className={classNames({ [classes.selected]: i === flipCardSelected })}
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

export default React.memo(AlbumCard);
