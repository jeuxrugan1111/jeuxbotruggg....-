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
client.user.setGame(` AG SERVER.`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "408926307372498945") return;

if (message.content.startsWith(PREFIX + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/darkknite55");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
}

if (message.content.startsWith(PREFIX + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`تم تغيير آسم البوت بنجآح **${argresult}**`)
  return message.reply("** لا يمكنك تغيير تغيير آسم البوت الآن آلا بعد سآعتين **");
}
if (message.content.startsWith(PREFIX + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`تم تغيير صورة البوت بنجآح **${argresult}**`);
}
});


client.login(process.env.BOT_TOKEN);
