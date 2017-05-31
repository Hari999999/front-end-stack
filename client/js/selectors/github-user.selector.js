import { createSelector } from 'reselect';

const getgithubUser = (state) => {
    const user = state.root.get('user');
    return user ? user.toJS() : null;
};

const githubUserSelector = createSelector(
    [getgithubUser],
    (githubUser) => {
        return githubUser;
    }
);

export default githubUserSelector;
