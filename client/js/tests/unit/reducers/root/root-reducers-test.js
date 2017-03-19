import * as rootReducers from 'reducers/root/root-reducers';

const INITIAL_STATE = rootReducers.INITIAL_STATE;

describe('Root reducer replyToGreeting()', () => {
    it('should set the given reply in the root app state', () => {
        const action = {
            payload: {
                reply: 'Booom!'
            }
        };
        const newState = rootReducers.replyToGreeting(INITIAL_STATE, action);
        expect(newState.get('reply')).toBe('Booom!');
    });
});
