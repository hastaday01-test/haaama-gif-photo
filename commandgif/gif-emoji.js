const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/790836700561670145/790836721896914954/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836726574350356/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836731821686784/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836737018036264/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836743762083851/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836753241866240/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836747260395540/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836766281564181/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836771385770004/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836775714029598/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836781654343710/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836806860931072/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836828197617714/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836833763852338/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836843235115008/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836867490250772/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836871882211338/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836880785801236/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836884304691230/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836897010286652/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836892903669770/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836914688098344/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/790836923442266112/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/791250869890056232/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/791250873741213716/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/791250879948783646/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/791250901562163220/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/791250931563495444/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/791250998936076288/image0.gif", "https://media.discordapp.net/attachments/790836700561670145/791251020117573642/image1.gif"];

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
