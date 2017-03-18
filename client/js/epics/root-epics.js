import { PING, PONG } from 'actions/root/ping/ping-actions';

export const pingEpic = (action$) =>
      action$.ofType(PING)
        .delay(1000) // eslint-disable-line
        .mapTo({ type: PONG });
