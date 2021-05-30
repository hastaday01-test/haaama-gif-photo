const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
// .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
/// .setImage(`https://media.discordapp.net/attachments/790836700561670145/845056457162489876/image0.gif`)
.setAuthor(`RaGif Command`)
.setDescription(`
**RaGif Bot**
My Preifx In this Server (*)
`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['<@!814607957349629962>'],
permLevel: 0
};

exports.help = {
  name: '<@!814607957349629962>',
  description: 'rexuss',
  usage: '<@!814607957349629962>'
};
