import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, name, version } from '../../bot.json';

const debug = createDebug('bot:help_command');

const help = () => async (ctx: Context) => {
  const message = `This is help message. `;
  debug(`Triggered "about" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { help };
