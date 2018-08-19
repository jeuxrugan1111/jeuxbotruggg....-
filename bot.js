const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#d";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\`** :white_check_mark: جآري آرسال البرودكآست ل  **`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`AG CLAN BOT- Script By : PREDATOR`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : PREDATOR ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DARK SERVER`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);
