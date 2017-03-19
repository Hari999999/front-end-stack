export const REPLY_TO_GREETING = 'ROOT__REPLY_TO_GREETING';

export const replyToGreeting = (reply) => ({
    type: REPLY_TO_GREETING,
    payload: {
        reply
    }
});
