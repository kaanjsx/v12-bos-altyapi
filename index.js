const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client()
require('./dowlander/cmds.js')(client);  

client.on('ready', () => {
  console.log("hazırım!")
 client.user.setPresence({
    activity: {
      name: `discord.gg/delimine`,
      type: "COMPETING"
    },
    status: "idle"
  });
  });

// komut yükleyici
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  console.log(`[BOT]: ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`[BOT]: ${props.config.name} komutu yüklendi.`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
});


// client.on('ready', ()=>{
// client.channels.cache.get('ses kanal id').join()
// })


client.login("BOT_TOKEN")
