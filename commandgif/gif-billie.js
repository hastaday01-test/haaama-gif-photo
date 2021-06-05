const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/615977432180326430/850374760072609792/a_983f87d59738d4bc602739e416918840.gif", "https://media.discordapp.net/attachments/615977432180326430/850374718090510376/image0-3.gif", "https://media.discordapp.net/attachments/615977432180326430/850374647265493002/image0-4.gif", "https://media.discordapp.net/attachments/615977432180326430/850374608266985472/3fc2ebaee8b9e93b584148de51e0cb4a.gif", "https://media.discordapp.net/attachments/615977432180326430/850374565238538260/---.gif", "https://media.discordapp.net/attachments/615977432180326430/850374540508135444/rexabillie_20.gif", "https://media.discordapp.net/attachments/615977432180326430/850374498460237855/7865b801c13fd962b2abd80f505485e7.gif", "https://media.discordapp.net/attachments/615977432180326430/850374391333650452/image0-1.gif", "https://media.discordapp.net/attachments/615977432180326430/850374361394839582/sdlsdl.gif", "https://media.discordapp.net/attachments/615977432180326430/850374308450140201/image0-2.gif", "https://media.discordapp.net/attachments/615977432180326430/850374159271329812/image3.gif", "https://media.discordapp.net/attachments/615977432180326430/850374111427297280/image1.gif", "https://media.discordapp.net/attachments/615977432180326430/850374069214773308/image0-7.gif", "https://media.discordapp.net/attachments/615977432180326430/850374057412657192/image0-9.gif", "https://media.discordapp.net/attachments/615977432180326430/850374042343309372/image0-10.gif", "https://media.discordapp.net/attachments/615977432180326430/850373945425002556/image0-13.gif", "https://media.discordapp.net/attachments/615977432180326430/850296050522390538/image0-1.gif", "https://media.discordapp.net/attachments/615977432180326430/848873775620816906/pp.gif", "https://media.discordapp.net/attachments/615977432180326430/848873554878922753/pp.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Sad Gif")
.setColor("RANDOM")
.setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['bille','billie','billiegif','Billie'],

  permLevel: 0

};

exports.help = {

  name: 'billie',

  description: 'rexuss',

  usage: 'billie'

};
