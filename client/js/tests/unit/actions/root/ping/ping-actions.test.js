import { ping, PING, pong, PONG } from 'ducks/ping';

describe('ping actions', () => {
    it('should create a ping action', () => {
        const expectedAction = {
            type: PING
        };
        expect(ping()).toEqual(expectedAction);
    });
});

describe('pong actions', () => {
    it('should create a pong action', () => {
        const expectedAction = {
            type: PONG
        };
        expect(pong()).toEqual(expectedAction);
    });
});
