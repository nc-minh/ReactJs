import React from 'react';

function Album({album}) {
    return (
        <div>
            <img src={album.url}/>
            <h1>{album.title}</h1>
        </div>
    );
}

export default Album;