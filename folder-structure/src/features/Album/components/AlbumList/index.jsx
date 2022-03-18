import React from 'react';
import Album from '../Album';
import './styles.scss';

function AlbumList({albumList}) {
    return (
        <div className='album-list'>
            {albumList.map(album => (
                <Album key={album.id} album={album}/>
            ))}
        </div>
    );
}

export default AlbumList;