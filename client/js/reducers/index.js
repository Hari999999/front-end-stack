import { combineReducers } from 'redux';
import root from './root/root-reducers';


export default combineReducers({
    root: root.base,
    ping: root.ping
});
