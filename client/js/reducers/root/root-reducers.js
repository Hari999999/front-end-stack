import { Map } from 'immutable';
import ping from 'reducers/root/ping/ping-reducers';
import {
        REPLY_TO_GREETING
    } from 'actions/root/root-actions';

export const INITIAL_STATE = new Map({
    reply: ''
});

const base = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REPLY_TO_GREETING:
            return replyToGreeting(state, action);
        default:
            return state;
    }
};

export function replyToGreeting(state, action) {
    return state.set('reply', action.payload.reply);
}

export default {
    base,
    ping
};
