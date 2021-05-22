const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/790836700561670145/790836721896914954/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836726574350356/image0.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Emoji Gif")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-emoji','emoji-gif','gifemoji','emojigif'],

  permLevel: 0

};

exports.help = {

  name: 'emoji',

  description: 'rexuss',

  usage: 'emoji'

};
