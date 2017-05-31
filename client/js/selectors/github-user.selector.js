import { createSelector } from 'reselect';

const getGithubUser = (state) => state.root.get('user');

const githubUserSelector = createSelector(
    [getGithubUser],
    (githubUser) => {
        return githubUser ? githubUser.toJS() : null;
    }
);

export default githubUserSelector;
