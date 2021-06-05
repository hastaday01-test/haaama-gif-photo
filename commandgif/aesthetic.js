const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/699341228218646628/797488619681611776/4FF902CE-1BF9-4806-BF48-72E5FCE54EA3.gif", "https://media.discordapp.net/attachments/699341228218646628/779108619501305908/image0.gif", "https://media.discordapp.net/attachments/699341228218646628/767648406076129280/image0.gif", "https://media.discordapp.net/attachments/699341228218646628/786164193937588254/gif992.gif", "https://media.discordapp.net/attachments/699341228218646628/798507085062602782/20200408_033938_1.gif", "https://media.discordapp.net/attachments/737804426642718763/805678208757530644/g1.gif", "https://media.discordapp.net/attachments/699341228218646628/797580763834351616/image0-27.gif", "https://media.discordapp.net/attachments/737804426642718763/810982689473036288/e5.gif", "https://media.discordapp.net/attachments/699341228218646628/763749313024622622/144738e9875122dfb4c25e0c10c20173.gif", "https://media.discordapp.net/attachments/699341228218646628/798507676115795998/sanat.gif", "https://media.discordapp.net/attachments/699341228218646628/797580937638445081/a_1438fd3d9dc925ae8b3c08d30fe01f87.gif", "https://media.discordapp.net/attachments/737804426642718763/798073479975010304/w23.gif", "https://media.discordapp.net/attachments/699341228218646628/807022298212597770/40ec193943499cb7de10b7f3522cd5e7.gif", "https://media.discordapp.net/attachments/699341228218646628/790687560690434098/image0.gif", "https://media.discordapp.net/attachments/737804426642718763/810982601782853642/image3.gif", "https://media.discordapp.net/attachments/737804426642718763/804365986324545566/image0.gif", "https://media.discordapp.net/attachments/699341228218646628/783366579710722088/giphy.gif", "https://media.discordapp.net/attachments/699341228218646628/785925009071276132/KyMgOxSSMw0gN8WMuU.gif", "https://media.discordapp.net/attachments/699341228218646628/795307118106378270/133.gif", "https://media.discordapp.net/attachments/737804426642718763/798073464169824296/w21.gif", "https://media.discordapp.net/attachments/699341228218646628/779861395239862272/image0.gif", "https://media.discordapp.net/attachments/737804426642718763/811607233019641866/image0.gif", "https://media.discordapp.net/attachments/699341228218646628/807022085905449000/9c3512ffeeb8ce6a601ae78d46f62261.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Asethetic")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['asethetic','Asethetic','att','Att'],

  permLevel: 0

};

exports.help = {

  name: 'asethetic',

  description: 'rexuss',

  usage: 'asethetic'

};
