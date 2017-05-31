import { combineEpics } from 'redux-observable';
import pingEpics from 'epics/root/ping/ping.epics';
import starwarsEpics from 'epics/root/starwars/starwars.epics';

import {
    GET_GITHUB_USER,
    getGithubUserFailure,
    getGithubUserSuccess
} from 'actions/root/root.actions';

export const githubEpic = (action$) =>
    action$.ofType(GET_GITHUB_USER).mergeMap((action) =>
        fetch(`https://api.github.com/users/${action.payload}`)
            .then((response) => response.json())
            .then((response) => getGithubUserSuccess({
                avatar: response.avatar_url,
                username: response.login,
                id: response.id
            }))
            .catch((error) => getGithubUserFailure(error))
    );

export default combineEpics(pingEpics, starwarsEpics, githubEpic);
