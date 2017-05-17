import deepFreeze from 'deepfreeze';
import gitHubReducer,
    {
    GET_GITHUB_USER_FAILURE,
    GET_GITHUB_USER_SUCCESS,
    INITIAL_STATE as initialState
    } from 'ducks/github';

const INITIAL_STATE = deepFreeze(initialState);

describe('GitHub reducer default', () => {
    it('should return the existing state when given an action that isnt handled by this reducer', () => {
        const action = {
            type: null
        };
        const newState = gitHubReducer(undefined, action);
        expect(newState).toBe(INITIAL_STATE);
    });
});

describe('GitHub reducer getGitHubUserSuccess', () => {
    it('should set the given user in the app state', () => {
        const user = {
            avatar_url: '', // eslint-disable-line camelcase
            login: 'pf',
            id: 12345
        };
        const action = {
            type: GET_GITHUB_USER_SUCCESS,
            payload: user
        };
        const newState = gitHubReducer(INITIAL_STATE, action);
        expect(newState.get('user').toJS()).toEqual(user);
        expect(newState.get('error')).toBeNull();
    });
});

describe('GitHub reducer getGitHubUserFailure', () => {
    it('should set the error in the app state', () => {
        const error = {
            message: 'ajax error 404'
        };
        const action = {
            type: GET_GITHUB_USER_FAILURE,
            payload: error
        };
        const newState = gitHubReducer(INITIAL_STATE, action);
        expect(newState.get('user')).toBeNull();
        expect(newState.get('error').toJS()).toEqual(error);
    });
});
