
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
// .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(`https://media.discordapp.net/attachments/790836700561670145/838461806137442365/image0.gif`)
/// .setTitle(`link - https://top.gg/bot/814607957349629962`)
.setAuthor(`Vote RaGif`)
.setDescription(`
[Click Here to Vote](https://top.gg/bot/814607957349629962)`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['vote'],
permLevel: 0
};

exports.help = {
  name: 'vote',
  description: 'rexuss',
  usage: 'v'
};
