import {
    GET_GITHUB_USER,
    GET_GITHUB_USER_FAILURE,
    GET_GITHUB_USER_SUCCESS,
    getGitHubUser,
    getGitHubUserFailure,
    getGitHubUserSuccess
} from 'ducks/github';

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
