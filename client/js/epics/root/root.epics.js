import * as rootActions from 'actions/root/root.actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import pingEpics from 'epics/root/ping/ping.epics';
import starwarsEpics from 'epics/root/starwars/starwars.epics';

export const githubEpic = (action$) =>
      action$.ofType(rootActions.GET_GITHUB_USER)
      .mergeMap((action) =>
         ajax
            .getJSON(`https://api.github.com/users/${action.payload}`)
            .map((response) => {
                return rootActions.getgithubUserSuccess(response);
            })
            .catch((error) => Observable.of(
                rootActions.getgithubUserFailure(error)
            ))
       );

export default combineEpics(pingEpics, starwarsEpics, githubEpic);
