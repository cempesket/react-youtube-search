import axios from 'axios';

import ActionType from './ActionType';

const API_KEY = "AIzaSyBLJc0QvuYAsQhN9hsVtFZyfpWqAlap6Rs";

export function getVideoList(term) {

    return async dispatch => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${term}&type=video`);
        dispatch({
            type: ActionType.GET_VIDEO_LIST,
            payload: response.data.items
        })
    }
}

export function selectVideo(video) {
    return {type: ActionType.SELECT_VIDEO, payload: video}
}