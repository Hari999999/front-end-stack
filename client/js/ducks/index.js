import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import gitHub, { epics as gitHubEpics } from './github';
import ping, { epics as pingEpics } from './ping';
import starwars, { epics as starwarsEpics } from './starwars';

export const epics = combineEpics(
    ...Object.values(pingEpics),
    ...Object.values(starwarsEpics),
    ...Object.values(gitHubEpics)
);

export const reducers = combineReducers({
    gitHub,
    ping,
    starwars
});
