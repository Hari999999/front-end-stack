import { createSelector } from 'reselect';

const getGithubError = (state) => {
    const error = state.github.get('error');
    return error ? error.toJS() : null;
};

const githubErrorSelector = createSelector(
    [getGithubError],
    (githubError) => {
        return githubError;
    }
);

export default githubErrorSelector;
