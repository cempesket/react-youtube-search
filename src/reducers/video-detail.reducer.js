import ActionType from '../actions/ActionType';

export default function VideoDetailReducer(state = null, action) {

    switch (action.type) {
        case ActionType.SELECT_VIDEO:
            return action.payload;
        default:
            return state;
    }
}