import * as rootActions from 'actions/root/root.actions';

describe('getgithubUser() actions', () => {
    it('should create an action with the given userId as the payload.', () => {
        const userId = 'pixel-fusion';
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER,
            payload: userId
        };
        expect(rootActions.getgithubUser('pixel-fusion')).toEqual(expectedAction);
    });
});

describe('getgithubUserSuccess() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER_SUCCESS
        };
        expect(rootActions.getgithubUserSuccess()).toEqual(expectedAction);
    });
});

describe('getgithubUserFailure() actions', () => {
    it('should create an action.', () => {
        const expectedAction = {
            type: rootActions.GET_GITHUB_USER_FAILURE
        };
        expect(rootActions.getgithubUserFailure()).toEqual(expectedAction);
    });
});
