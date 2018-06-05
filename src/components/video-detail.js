import React, {Component} from 'react';
import {connect} from 'react-redux';

class VideoDetail extends Component {
    render() {
        if (!this.props.selectedVideo)
            return (<br/>);
        return (<div>
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9" style={{width: '100%'}}>
                    <iframe title={this.props.selectedVideo.snippet.title} width="100%" height="480"
                            src={`https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`}
                            className="embed-responsive-item">
                    </iframe>
                </div>
                <div className="details">
                    <div>
                        <p>{this.props.selectedVideo.snippet.title}</p>
                    </div>
                    <div>
                        {this.props.selectedVideo.snippet.description}
                    </div>
                </div>
            </div>

        </div>)
    };
}

function mapStateToProps(state) {
    return {
        selectedVideo: state.videoDetail
    };
}

export default connect(mapStateToProps)(VideoDetail);