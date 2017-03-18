import { combineEpics } from 'redux-observable';
import ping from 'epics/root/ping/ping-epics';

export default combineEpics(ping);
