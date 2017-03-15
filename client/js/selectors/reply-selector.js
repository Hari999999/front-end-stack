import { createSelector } from 'reselect';

const getReply = (state) => {
    return state.root.get('reply');
};

const replySelector = createSelector(
    [getReply],
    (reply) => {
        return reply;
    }
);

export default replySelector;
