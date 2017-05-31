import { createSelector } from 'reselect';

const getgithubError = (state) => {
    const error = state.root.get('error');
    return error ? error.toJS() : null;
};

const githubErrorSelector = createSelector(
    [getgithubError],
    (githubError) => {
        return githubError;
    }
);

export default githubErrorSelector;
