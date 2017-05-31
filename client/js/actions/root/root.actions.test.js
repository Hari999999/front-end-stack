import * as rootActions from 'actions/root/root.actions';

describe('getGithubUser() actions', () => {
    it('should create an action with the given userId as the payload.', () => {
        const userId = 'pixel-fusion';
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER,
            payload: userId
        };
        expect(rootActions.getGithubUser('pixel-fusion')).toEqual(expectedAction);
    });
});

describe('getGithubUserSuccess() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER_SUCCESS
        };
        expect(rootActions.getGithubUserSuccess()).toEqual(expectedAction);
    });
});

describe('getGithubUserFailure() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER_FAILURE
        };
        expect(rootActions.getGithubUserFailure()).toEqual(expectedAction);
    });
});
