import Discord from 'discord.js';

export default function startBot(token) {
  const bot = new Discord.Client();

  bot.on("ready", () => {
    // Message to acknowledge that the bot has been logged into discrod.
    console.log(`Logged in as`, bot.user?.tag, "at", new Date().getUTCDate());
  });

  bot.login(token);
}