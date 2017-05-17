import { combineReducers } from 'redux';
import ping from './ping';
import root from './root';
import starwars from './starwars';

export default combineReducers({
    root,
    ping,
    starwars
});
