import { combineReducers } from 'redux';
import ping from 'reducers/root/ping/ping-reducers';
import root from 'reducers/root/root-reducers';
import starwars from 'reducers/root/starwars/starwars-reducers';

export default combineReducers({
    root,
    ping,
    starwars
});
