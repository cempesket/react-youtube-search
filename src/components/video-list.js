import React from 'react';

import VideoListItem from './video-list-item';

const getVideoListItems = (videoList,onVideoSelect) => {
    return videoList.map(video => <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect}/>)
};

const VideoList = function ({videoList,onVideoSelect}) {
    return (getVideoListItems(videoList,onVideoSelect))
};
export default VideoList;