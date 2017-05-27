import { ajax } from 'rxjs/observable/dom/ajax';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';

// Actions
export const GET_GITHUB_USER = 'front-end-stack/root/GET_GITHUB_USER';
export const GET_GITHUB_USER_FAILURE =
    'front-end-stack/root/GET_GITHUB_USER_FAILURE';
export const GET_GITHUB_USER_SUCCESS =
    'front-end-stack/root/GET_GITHUB_USER_SUCCESS';

// Reducer
export const INITIAL_STATE = new Map({
    avatar: Map(),
    username: Map(),
    error: null
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_GITHUB_USER_SUCCESS: {
            const { avatar, username, id } = action.payload;
            return state
                .setIn(['username', id], username)
                .setIn(['avatar', id], avatar)
                .set('error', null);
        }
        case GET_GITHUB_USER_FAILURE:
            return state
                .set('error', new Map(action.payload))
                .set('avatar', new Map())
                .set('username', new Map());
        default:
            return state;
    }
};

// Action Creators
export const getGitHubUser = (userId) => ({
    type: GET_GITHUB_USER,
    payload: userId
});

export const getGitHubUserSuccess = (response) => ({
    type: GET_GITHUB_USER_SUCCESS,
    payload: response
});

export const getGitHubUserFailure = (error) => ({
    type: GET_GITHUB_USER_FAILURE,
    payload: error
});

// Epics
const pingEpic = (action$) =>
    action$.ofType(GET_GITHUB_USER).mergeMap((action) =>
        ajax
            .getJSON(`https://api.github.com/users/${action.payload}`)
            .map((response) => {
                console.log('error', response);
                const avatar = response.avatar_url;
                const username = response.login;
                const id = response.id;
                return getGitHubUserSuccess({ avatar, username, id });
            })
            .catch((error) => Observable.of(getGitHubUserFailure(error)))
    );

export const epics = {
    pingEpic
};
