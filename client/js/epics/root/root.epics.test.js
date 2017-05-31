import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { githubEpic } from 'epics/root/root.epics';
import { testEpic } from 'tests/helpers.js';
import {
    getGithubUser,
    getGithubUserFailure,
    getGithubUserSuccess
} from 'actions/root/root.actions';

// Epics
describe('github epics', () => {
    it('should return the next action in the stream', () => {
        const response = {
            id: '12313',
            login: 'hally9k',
            avatar_url: 'https://google.com/image.jpg' // eslint-disable-line camelcase
        };
        fetch.mockResponseOnce(JSON.stringify(response));

        return expect(
            testEpic(
                githubEpic,
                getGithubUser('hally9k')
            )
        ).resolves
        .toEqual([getGithubUserSuccess({
            avatar: response.avatar_url,
            username: response.login,
            id: response.id
        })]);
    });

    it('should return the error action', () => {
        fetch.mockRejectOnce();

        return expect(
            testEpic(
                githubEpic,
                getGithubUser('hally9k')
            )
        ).resolves
        .toEqual([getGithubUserFailure()]);
    });
});

/*
/
/ This is an example of testing epics by mocking out the store and registering
/ the epic we want to test with the redix-observable middleware.
/
*/
describe('github epic integration', () => {
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
