import { combineEpics } from 'redux-observable';
import root from 'epics/root/root.epics';

export default combineEpics(root);
