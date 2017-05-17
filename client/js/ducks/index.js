import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import gitHub, { gitHubEpic } from './github';
import ping, { pingEpic } from './ping';
import starwars, { starwarsEpic } from './starwars';

export const epics = combineEpics(
    pingEpic,
    starwarsEpic,
    gitHubEpic
);

export const reducers = combineReducers({
    gitHub,
    ping,
    starwars
});


