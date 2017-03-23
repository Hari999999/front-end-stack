export const GET_GITHUB_USER = 'ROOT__GET_GITHUB_USER';
export const GET_GITHUB_USER_FAILURE = 'ROOT__GET_GITHUB_USER_FAILURE';
export const GET_GITHUB_USER_SUCCESS = 'ROOT__GET_GITHUB_USER_SUCCESS';

export const getGitHubUser = (userId) => ({
    type: GET_GITHUB_USER,
    payload: userId
});

export const getGitHubUserSuccess = (response) => ({
    type: GET_GITHUB_USER_SUCCESS,
    payload: response
});
export const getGitHubUserFailure = (error) => ({
    type: GET_GITHUB_USER_FAILURE,
    payload: error
});
