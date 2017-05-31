import { Map } from 'immutable';
import {
    GET_GITHUB_USER_FAILURE,
    GET_GITHUB_USER_SUCCESS
} from 'actions/root/root.actions';

export const INITIAL_STATE = new Map({
    user: null,
    error: null
});

export default (state = INITIAL_STATE, action) => {
    if (!action) return state;
    switch (action.type) {
        case GET_GITHUB_USER_SUCCESS:
            return getGithubUserSuccess(state, action);
        case GET_GITHUB_USER_FAILURE:
            return getGithubUserFailure(state, action);
        default:
            return state;
    }
};

function getGithubUserSuccess(state, action) {
    return state
            .set('user', new Map(action.payload))
            .set('error', null);
}

function getGithubUserFailure(state, action) {
    return state
            .set('error', new Map(action.payload))
            .set('user', null);
}
