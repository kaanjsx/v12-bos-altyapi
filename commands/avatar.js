const Discord = require('discord.js');
exports.run = function(client, message, args) {
const kaan = new Discord.MessageEmbed()
.setDescription(`:star: Avatarınız;`)
.setImage(`${message.author.avatarURL({dynamic:true})} `)
.setColor("BLURPLE")
message.channel.send(kaan)
   };


exports.config = {
    name: "avatar",
    aliases: []
};