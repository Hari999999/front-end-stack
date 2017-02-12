import { combineReducers } from 'redux';
import root from './root/root-reducers';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    routing: routerReducer,
    root
});
