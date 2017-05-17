import { combineEpics } from 'redux-observable';
import { pingEpic } from './ping';
import { rootEpic } from './root';
import { starwarsEpic } from './starwars';

export default combineEpics(pingEpic, starwarsEpic, rootEpic);
