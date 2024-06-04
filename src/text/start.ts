import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:start_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_parameters: { message_id: messageId },
  });

const start = () => async (ctx: Context) => {
  debug('Triggered "start" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name}`;

  if (messageId) {
    await replyToMessage(ctx, messageId, `Hello, ${userName}!`);
  }
};

export { start };
