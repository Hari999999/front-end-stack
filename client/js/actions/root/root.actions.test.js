import * as rootActions from 'actions/root/root.actions';

describe('getGitHubUser() actions', () => {
    it('should create an action with the given userId as the payload.', () => {
        const userId = 'pixel-fusion';
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER,
            payload: userId
        };
        expect(rootActions.getGitHubUser('pixel-fusion')).toEqual(expectedAction);
    });
});

describe('getGitHubUserSuccess() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER_SUCCESS
        };
        expect(rootActions.getGitHubUserSuccess()).toEqual(expectedAction);
    });
});

describe('getGitHubUserFailure() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER_FAILURE
        };
        expect(rootActions.getGitHubUserFailure()).toEqual(expectedAction);
    });
});
