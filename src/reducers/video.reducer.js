import ActionType from '../actions/ActionType';

export default function VideoReducer(state = [], action) {

    switch (action.type) {
        case ActionType.GET_VIDEO_LIST:
            return action.payload;
        default:
            return state;
    }
}