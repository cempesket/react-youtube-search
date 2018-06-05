import {combineReducers} from 'redux';

import VideoReducer from './video.reducer'
import VideoDetailReducer from "./video-detail.reducer";

const rootReducer = combineReducers({
    videos: VideoReducer,
    videoDetail: VideoDetailReducer
});
export default rootReducer;