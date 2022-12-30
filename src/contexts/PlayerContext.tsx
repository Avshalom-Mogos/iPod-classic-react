import * as React from 'react';
import { Album, Song } from './data';


export type PlayerContextApi = {
    album: Album | null,
    setAlbum(album: Album): void,
    song: Song | null,
    setSong(song: Song): void,
    songIndex: number,
    setSongIndex(index: number): void
};

type PlayerProviderProps = React.PropsWithChildren;

export const PlayerContext = React.createContext<PlayerContextApi | null>(null);

export const PlayerProvider = (props: PlayerProviderProps) => {

    const [album, setAlbum] = React.useState<Album | null>(null);
    const [song, setSong] = React.useState<Song | null>(null);
    const [songIndex, setSongIndex] = React.useState(0);

    return (
        <PlayerContext.Provider value={{
            album,
            setAlbum,
            song,
            setSong,
            songIndex,
            setSongIndex
        }}>
            {props.children}
        </PlayerContext.Provider>
    )
};
