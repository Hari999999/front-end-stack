import * as pingActions from 'actions/root/ping/ping-actions';
import deepFreeze from 'deepfreeze';
import pingReducers, { INITIAL_STATE as initialState } from 'reducers/root/ping/ping-reducers';

const INITIAL_STATE = deepFreeze(initialState);


describe('Ping reducer default', () => {
    it('should return the existing state when given an action that isnt handled by this reducer', () => {
        const action = {
            type: null
        };
        const newState = pingReducers(undefined, action);
        expect(newState).toBe(INITIAL_STATE);
    });
});

describe('Ping reducer pong', () => {
    it('should set the pong property in the ping app state to "PONG"', () => {
        const action = pingActions.pong();
        const newState = pingReducers(INITIAL_STATE, action);
        expect(newState.get('pong')).toBe('PONG');
    });
});
