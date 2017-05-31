import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import {
    epics,
    getGithubUser,
    getGithubUserFailure,
    getGithubUserSuccess
} from 'ducks/github';

const { githubEpic } = epics;

/*
/
/ This is an example of testing epics by mocking out the store and registering
/ the epic with the redix-observable middleware.
*/
describe('Epic integration tests:', () => {
    describe('Github epics', () => {
        it('should dispatch the initial action and then the deferred action', () => {
            const response = {
                id: '12313',
                login: 'hally9k',
                avatar_url: 'https://google.com/image.jpg' // eslint-disable-line camelcase
            };
            fetch.mockResponseOnce(JSON.stringify(response));

            const epicMiddleware = createEpicMiddleware(githubEpic);
            const store = configureMockStore([epicMiddleware])();
            store.dispatch(getGithubUser('hally9k'));

            process.nextTick(() => {
                const actions = store.getActions();
                expect(actions).toEqual([
                    getGithubUser('hally9k'),
                    getGithubUserSuccess({
                        avatar: response.avatar_url,
                        username: response.login,
                        id: response.id
                    })
                ]);
            });
        });

        it('should dispatch the initial action and then the deferred action when fetch rejects', () => {
            fetch.mockRejectOnce();

            const epicMiddleware = createEpicMiddleware(githubEpic);
            const store = configureMockStore([epicMiddleware])();
            store.dispatch(getGithubUser('hally9k'));

            process.nextTick(() => {
                const actions = store.getActions();
                expect(actions).toEqual([
                    getGithubUser('hally9k'),
                    getGithubUserFailure()
                ]);
            });
        });
    });
});
