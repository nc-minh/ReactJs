import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            title: 'Ba',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/4/5/2/0452384a16155cb73d5400f7d7a9d963.jpg'
        },
        {
            id: 2,
            title: 'Ba',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/e/1/7/be170a13a867bd3bd3c0b230d13a3ceb.jpg'
        },
        {
            id: 3,
            title: 'Ba',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/7/f/0/d7f08a47afbf373dce730039ce2dffd9.jpg'
        },
        {
            id: 4,
            title: 'Ba',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/6/f/8/76f8320e62b5ecc33473711174de1737.jpg'
        }
    ]
    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;