import deepFreeze from 'deepfreeze';
import {
    REPLY_TO_GREETING
    } from 'actions/root/root-actions';
import rootReducers from 'reducers/root/root-reducers';

const INITIAL_STATE = deepFreeze(rootReducers.INITIAL_STATE);

describe('Root reducer replyToGreeting()', () => {
    it('should set the given reply in the root app state', () => {
        const action = {
            type: REPLY_TO_GREETING,
            payload: {
                reply: 'Booom!'
            }
        };
        const newState = rootReducers(INITIAL_STATE, action);
        expect(newState.get('reply')).toBe('Booom!');
    });
});
