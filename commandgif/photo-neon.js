const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [""];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Neon Gif")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Pneon','neonp','pNeon','photo-neon'],

  permLevel: 0

};

exports.help = {

  name: 'pneon',

  description: 'rexuss',

  usage: 'pneon'

};
