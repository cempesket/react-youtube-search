import React, {Component} from 'react';
import './App.css';
import VideoList from './containers/video-list';
import VideoDetail from './components/video-detail';
import SearchBar from './containers/search-bar';


class App extends Component {

    render() {
        return (
            <div className="App">
                <SearchBar/>
                <div className="row">
                    <div className="col-md-8">
                        <VideoDetail/>

                    </div>
                    <div className="col-md-4">
                        <VideoList/>
                    </div>
                </div>

            </div>
        );
    }
}
export default App;
