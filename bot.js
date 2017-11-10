const Discord = require('discord.js')

const token = "Mzc4NTU1Mzk2NjczMjQxMDg4.DOdMsw.v3yAW1I7Kl-bP-0SQ2CJ3ciR_78"
const prefix = "*"

var bot = new Discord.Client()

bot.on("ready", function()
{
  console.log("Ready")
  bot.user.setGame("SCraft | *help");
})

bot.on("guildMemberAdd", function(member)
{
  member.addRole(member.guild.roles.find("name", "Civilians"))
});

bot.on("message", function(message)
{
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase())
  {
    case "food":
      message.channel.send("```\n****** Civilian Radio ******\n \nDuring these tough times, our leader acknowledges the struggle our citizens have getting food.\nThere are some good prices in the local market so drop down and take a look.\nWe have a goverment agency set up to distribute daily rations once a day, you can pick extra ones with a meal ticket.\nWorst comes to worst, I'll turn a blind eye if you raid someone's house but I can't say the same for the KGB.\n \n****** Intermission Out ******```");
      break;
  }
});

client.login(process.env.BOT_TOKEN);
