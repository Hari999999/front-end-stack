import { Map } from 'immutable';

// Actions
export const PING = 'PING';
export const PONG = 'PONG';

// Reducer
export const INITIAL_STATE = new Map({
    pong: ''
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PONG:
            return state.set('pong', 'PONG');
        default:
            return state;
    }
};

// Action Creators
export const ping = () => ({ type: PING });

export const pong = () => ({ type: PONG });

// Epics
export const pingEpic = (action$) =>
    action$
        .ofType(PING)
        .delay(1000) // eslint-disable-line
        .mapTo(pong());

export const epics = {
    pingEpic
};
