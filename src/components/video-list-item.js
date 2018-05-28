import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    const snippet = video.snippet;

    return (<li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
            <div className="media-left">
                <img src={snippet.thumbnails.medium.url} alt="" className="media-object"/>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    <p>{snippet.title}</p>
                </div>
            </div>
        </div>

    </li>)
};
export default VideoListItem;