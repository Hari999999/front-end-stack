import * as starwarsActions from 'actions/root/starwars/starwars.actions';
import { List, Map } from 'immutable';

export const INITIAL_STATE = new Map({
    people: null,
    error: null
});

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case starwarsActions.FETCH_PEOPLE_SUCCESS:
            return fetchPeopleSuccess(state, action);
        case starwarsActions.FETCH_PEOPLE_FAILURE:
            return fetchPeopleFailure(state, action);
        default:
            return state;
    }
};

function fetchPeopleSuccess(state, action) {
    return state
            .set('people', new List(action.payload))
            .set('error', null);
}

function fetchPeopleFailure(state, action) {
    return state
            .set('error', new Map(action.payload))
            .set('people', null);
}
