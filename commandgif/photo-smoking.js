const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/755893513723576441/849080562542706729/3b0d30dcacfe180c96979d3ba89be537.jpg", "https://media.discordapp.net/attachments/755893513723576441/849080551352172584/db0abf0f3537f6441ac9d75cfc48483d.jpg", "https://media.discordapp.net/attachments/755893513723576441/849080540912680983/60cfbfd58d62eae9ca9866b3404c5588.jpg", "https://media.discordapp.net/attachments/755893513723576441/849080521605513236/f2a5b6524c541c74da763e72d6efc027.jpg", "https://media.discordapp.net/attachments/755893513723576441/848765520048291890/519c938268d3a9ec2ca9cf2aa711ec1f.jpg", "https://media.discordapp.net/attachments/755893513723576441/848312867077226536/4da302eccc1bad56b33e59cd3d8a233f.jpg", "https://media.discordapp.net/attachments/755893513723576441/847877389953925161/bd98ee945e6338010b506a483c049bb6.jpg", "https://media.discordapp.net/attachments/755893513723576441/846644731978186772/5b2f675a0613a5954f35b717756d945f.png", "https://media.discordapp.net/attachments/755893513723576441/846442963558072371/Screenshot_2021-05-24-11-19-52-1.png", "https://media.discordapp.net/attachments/755893513723576441/846286140294430740/ea7e7ce654fd0f2ce8787880437fbec6.jpg", "https://media.discordapp.net/attachments/755893206008201357/849530169328402472/indir.jpg", "https://media.discordapp.net/attachments/755893206008201357/848765377831632896/5d50cc3146727a44517241fbfa5c218d.jpg", "https://media.discordapp.net/attachments/755893206008201357/848417984510296084/Jax.jpg", "https://media.discordapp.net/attachments/755893206008201357/847875214443675668/unknown-1.png", "https://media.discordapp.net/attachments/755893206008201357/847875210153426994/f7352df21410018f8a0435172c60e709.jpg", "https://media.discordapp.net/attachments/755893206008201357/847875209428205628/f54d026a559322e478c5e6d88eb2dc01.png", "https://media.discordapp.net/attachments/755893206008201357/847875188452360242/c63f2076a4b9240270edb4ce009d7dff.jpg", "https://media.discordapp.net/attachments/755893206008201357/847875173427183646/aac9b14bb79a0e1bb0aa0c4a2f1a3dd0.jpg", "https://media.discordapp.net/attachments/755893206008201357/847875141118591007/053ce2805d846c8ffdcee2a50d9be0e9.jpg", "https://media.discordapp.net/attachments/755893513723576441/845040087150755850/grunge_kay-20210506-0028.jpg", "https://media.discordapp.net/attachments/755893513723576441/845040083710771210/grunge_kay-20210506-0017.jpg", "https://media.discordapp.net/attachments/755893513723576441/845040076806291496/grunge_kay-20210506-0004.jpg", "https://media.discordapp.net/attachments/755893513723576441/845040043390533662/ecde4e6d2c47e1110e9b78b1e8b905a0.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo smoking")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Psmoking','psmoking','smokingp','photo-smoking'],

  permLevel: 0

};

exports.help = {

  name: 'Psmoking',

  description: 'rexuss',

  usage: 'Psmoming'

};
