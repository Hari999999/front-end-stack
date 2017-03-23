import * as rootActions from 'actions/root/root-actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import ping from 'epics/root/ping/ping-epics';
import starwars from 'epics/root/starwars/starwars-epics';

const root = (action$) =>
      action$.ofType(rootActions.GET_GITHUB_USER)
      .mergeMap((action) =>
         ajax
            .getJSON(`https://api.github.com/users/${action.payload}`)
            .map((response) => {
                return rootActions.getGitHubUserSuccess(response);
            })
            .catch((error) => Observable.of(
                rootActions.getGitHubUserFailure(error)
            ))
       );

export default combineEpics(ping, root, starwars);
