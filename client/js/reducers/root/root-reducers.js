import { Map } from 'immutable';
import {
        REPLY_TO_GREETING
    } from 'actions/root/root-actions';

const INITIAL_STATE = new Map({
    reply: ''
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REPLY_TO_GREETING:
            return replyToGreeting(state, action);
        default:
            return state;
    }
};

function replyToGreeting(state, action) {
    return state.set('reply', action.payload.reply);
}
