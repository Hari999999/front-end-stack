import { createSelector } from 'reselect';

const getGitHubError = (state) => {
    const error = state.gitHub.get('error');
    return error ? error.toJS() : null;
};

const githubErrorSelector = createSelector(
    [getGitHubError],
    (githubError) => {
        return githubError;
    }
);

export default githubErrorSelector;
