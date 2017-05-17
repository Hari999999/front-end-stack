import { createSelector } from 'reselect';

const getGitHubUser = (state) => {
    const user = state.gitHub.get('user');
    return user ? user.toJS() : null;
};

const githubUserSelector = createSelector(
    [getGitHubUser],
    (githubUser) => {
        return githubUser;
    }
);

export default githubUserSelector;
