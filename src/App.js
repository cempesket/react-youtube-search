import React, {Component} from 'react';
import api from 'youtube-api-search';
import './App.css';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import SearchBar from './components/search-bar';

const API_KEY = "AIzaSyBS2SIiKHbNatGBtynUmVGkZ_xrSy62vwU";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], inputValue: '', selectedVideo: null}
    }

    render() {
        return (
            <div className="App">
                <SearchBar onSearch={term => this.getSearchResults(term)}/>
                <div className="row">
                    <div className="col-md-8">
                        <VideoDetail selectedVideo={this.state.selectedVideo}/>

                    </div>
                    <div className="col-md-4">
                        <VideoList onVideoSelect={video => this.setState({selectedVideo: video})}
                                   videoList={this.state.videos}/>
                    </div>
                </div>

            </div>
        );
    }

    getSearchResults(term) {
        if (!term) {
            this.setState({videos: []});

        } else {
            api({key: API_KEY, term}, (result) => {

                this.setState({videos: result, selectedVideo: result[0]})

            })
        }
    }
}

export default App;
