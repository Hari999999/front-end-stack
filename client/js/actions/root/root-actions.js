export const REPLY_TO_GREETING = 'ROOT__REPLY_TO_GREETING';


export function replyToGreeting(reply) {
    return {
        type: REPLY_TO_GREETING,
        payload: {
            reply
        }
    };
}
