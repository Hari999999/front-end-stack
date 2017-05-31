import deepFreeze from 'deepfreeze';
import {
    GET_GITHUB_USER_FAILURE,
    GET_GITHUB_USER_SUCCESS
} from 'actions/root/root.actions';
import rootReducers, { INITIAL_STATE as initialState } from 'reducers/root/root.reducers';

const INITIAL_STATE = deepFreeze(initialState);

describe('Root reducer default', () => {
    it('should return the existing state when given an action that isnt handled by this reducer', () => {
        const action = {
            type: null
        };
        const newState = rootReducers(undefined, action);
        expect(newState).toBe(INITIAL_STATE);
    });
});

describe('Root reducer getgithubUserSuccess', () => {
    it('should set the given user in the app state', () => {
        const user = {
            avatar_url: '', // eslint-disable-line camelcase
            login: 'pf',
            id: 12345
        };
        const action = {
            type: GET_GITHUB_USER_SUCCESS,
            payload: user
        };
        const newState = rootReducers(INITIAL_STATE, action);
        expect(newState.get('user').toJS()).toEqual(user);
        expect(newState.get('error')).toBeNull();
    });
});

describe('Root reducer getgithubUserFailure', () => {
    it('should set the error in the app state', () => {
        const error = {
            message: 'ajax error 404'
        };
        const action = {
            type: GET_GITHUB_USER_FAILURE,
            payload: error
        };
        const newState = rootReducers(INITIAL_STATE, action);
        expect(newState.get('user')).toBeNull();
        expect(newState.get('error').toJS()).toEqual(error);
    });
});
