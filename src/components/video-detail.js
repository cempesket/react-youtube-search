import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    if (!selectedVideo)
        return (<br/>);
    return (<div>
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9" style={{width: '100%'}}>
                <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                        className="embed-responsive-item">
                </iframe>
            </div>
            <div className="details">
                <div>
                    <p>{selectedVideo.snippet.title}</p>
                </div>
                <div>
                    {selectedVideo.snippet.description}
                </div>
            </div>
        </div>

    </div>)

};

export default VideoDetail;