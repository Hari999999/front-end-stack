import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import ping from 'epics/root/ping/ping-epics';
import starwars from 'epics/root/starwars/starwars-epics';
import {
    GET_GITHUB_USER,
    GET_GITHUB_USER_FAILURE,
    GET_GITHUB_USER_SUCCESS
    } from 'actions/root/root-actions';

const root = (action$) =>
      action$.ofType(GET_GITHUB_USER)
      .mergeMap((action) =>
         ajax
            .getJSON(`https://api.github.com/users/${action.payload}`)
            .map((response) => {
                return {
                    type: GET_GITHUB_USER_SUCCESS,
                    payload: response
                };
            })
            .catch((error) => Observable.of({
                type: GET_GITHUB_USER_FAILURE,
                payload: error
            }))
       );

export default combineEpics(ping, root, starwars);
