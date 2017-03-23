export const FETCH_PEOPLE = 'STARWARS__FETCH_PEOPLE';
export const FETCH_PEOPLE_FAILURE = 'STARWARS__FETCH_PEOPLE_FAILURE';
export const FETCH_PEOPLE_SUCCESS = 'STARWARS__FETCH_PEOPLE_SUCCESS';

export const fetchPeople = () => ({ type: FETCH_PEOPLE });

export const fetchPeopleFailure = (error) => ({
    type: FETCH_PEOPLE_FAILURE,
    payload: error
});

export const fetchPeopleSuccess = (people) => ({
    type: FETCH_PEOPLE_SUCCESS,
    payload: people
});
