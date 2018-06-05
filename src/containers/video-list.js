import React, {Component} from 'react';
import {connect} from 'react-redux';

import VideoListItem from '../components/video-list-item';
import {selectVideo} from "../actions/index";
import {bindActionCreators} from "redux";


class VideoList extends Component {
    render() {
        return (this.getVideoListItems(this.props.videos))
    }

     getVideoListItems(videoList) {
        return videoList.map(video => <VideoListItem video={video} key={video.etag} onVideoSelect={(video) => {
            this.props.selectVideo(video)
        }
        }/>)
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectVideo: selectVideo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);