import * as starwarsActions from 'actions/root/starwars/starwars.actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

const starwars = (action$) =>
      action$.ofType(starwarsActions.FETCH_PEOPLE)
      .mergeMap(() =>
         ajax
            .getJSON('https://swapi.co/api/people/')
            .map((response) => {
                return starwarsActions.fetchPeopleSuccess(response.results);
            })
            .catch((error) => Observable.of(starwarsActions.fetchPeopleFailure(error)))
       );

export default starwars;
