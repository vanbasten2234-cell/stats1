const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1454012853571948567')
    .setType('PLAYING')
    .setURL('https://www.rocketleague.com/en/play') 
    .setState('PLAY')
    .setName('roketleague')
    .setDetails(`pkaying now`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/960px-Rocket_League_coverart.jpg') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('welcome') 
    .setAssetsSmallImage('https://chaosboost.com/wp-content/uploads/webpcache/2024/09/rocket-league-rank-boost.webp') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('come and play with me') 
    .addButton('https://www.rocketleague.com/en/play');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
