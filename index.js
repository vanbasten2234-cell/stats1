const {uptimeDate} = require("./uptime.js");
const Discord = require("discord.js");
const client = new Discord.Client({intents: 3276799});
let prefix = "-";
client.on("ready", () => {
     console.log(`${client.user.tag} is ready!!`)
})


client.on("messageCreate", async (message) => {
   if(!message.content || message.author.bot || !message.guild) return;
   let args = message.content.trim().split(/ +/)
   let cmd = args[0].slice(prefix.length).toLowerCase();
  switch(cmd) {
    case "uptime":
      message.reply(`- **Uptime Since:** <t:${Math.floor(uptimeDate / 1000)}:R>`)
      break;
  }
  
  
})

client.login(process.env.token)
