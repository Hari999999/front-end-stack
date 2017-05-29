import deepFreeze from 'deepfreeze';
import gitHubReducer, {
    GET_GITHUB_USER,
    GET_GITHUB_USER_FAILURE,
    GET_GITHUB_USER_SUCCESS,
    getGitHubUser,
    getGitHubUserFailure,
    getGitHubUserSuccess,
    INITIAL_STATE as initialState
} from 'ducks/github';

const INITIAL_STATE = deepFreeze(initialState);

// Actions
describe('getGitHubUser() actions', () => {
    it('should create an action with the given userId as the payload.', () => {
        const userId = 'pixel-fusion';
        const expectedAction = {
            type: GET_GITHUB_USER,
            payload: userId
        };
        expect(getGitHubUser('pixel-fusion')).toEqual(expectedAction);
    });
});

describe('getGitHubUserSuccess() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: GET_GITHUB_USER_SUCCESS
        };
        expect(getGitHubUserSuccess()).toEqual(expectedAction);
    });
});

describe('getGitHubUserFailure() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: GET_GITHUB_USER_FAILURE
        };
        expect(getGitHubUserFailure()).toEqual(expectedAction);
    });
});

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
        const avatar = 'https://avatars3.githubusercontent.com/u/425?v=3';
        const username = 'james';
        const id = 425;

        const action = {
            type: GET_GITHUB_USER_SUCCESS,
            payload: { username, avatar, id }
        };
        const newState = gitHubReducer(INITIAL_STATE, action);
        expect(newState.get('avatar').toJS()).toEqual({ 425: avatar });
        expect(newState.get('username').toJS()).toEqual({ 425: username });
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
        expect(newState.get('error').toJS()).toEqual(error);
    });
});
