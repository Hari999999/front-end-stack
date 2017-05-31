import {
    FETCH_PEOPLE,
    fetchPeopleFailure,
    fetchPeopleSuccess
} from 'actions/root/starwars/starwars.actions';

const starwarsEpic = (action$) =>
    action$.ofType(FETCH_PEOPLE).mergeMap(() =>
        fetch('https://swapi.co/api/people/')
            .then((response) => response.json())
            .then((response) => fetchPeopleSuccess(response.results))
            .catch((error) => fetchPeopleFailure(error))
    );

export default starwarsEpic;
