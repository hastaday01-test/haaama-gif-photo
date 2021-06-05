const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/755890549659140146/849727087412903986/c26e66fd09b40b3d7d3ce32227c89983.jpg", "https://media.discordapp.net/attachments/755890549659140146/849357234437488680/IMG_-j2azbs.png", "https://media.discordapp.net/attachments/755890549659140146/849272514055897148/a8b52fd40fedc1f47dfe1a9cba12f3ac.jpg", "https://media.discordapp.net/attachments/755890549659140146/849272405339013130/ea3302d89beb9cc4de178da01d7b4aaf.jpg", "https://media.discordapp.net/attachments/755890549659140146/849272352700235806/6720ed4cd3a28d2f946898323c5d5e76.jpg", "https://media.discordapp.net/attachments/755890549659140146/849272311806689320/9d8b9ab8db691b9c8bcd929f23401fd5.jpg", "https://media.discordapp.net/attachments/755890549659140146/849023855019950120/image5.png", "https://media.discordapp.net/attachments/755890549659140146/848522036003340288/5a3258940ebcbae919e9f10e05c3dc07.png", "https://media.discordapp.net/attachments/755890549659140146/848049038892859432/d7c583c032e382bd297b6e5784966b67.jpg", "https://media.discordapp.net/attachments/755890549659140146/847490828208832561/images.png", "https://media.discordapp.net/attachments/755890549659140146/847490258601508924/2Q.png", "https://media.discordapp.net/attachments/755890549659140146/847490803198066708/images.png", "https://media.discordapp.net/attachments/755890549659140146/847445119317573632/627d504d3ccbc74d.jpg", "https://media.discordapp.net/attachments/755890549659140146/847445116938616842/9ab3108920bf5d835b28f1d4ec880780.jpg", "https://media.discordapp.net/attachments/755890549659140146/846017656644698122/wp7380531.jpg", "https://media.discordapp.net/attachments/755890549659140146/844842061311246336/4e41bdb11c2ea10fbecbeff07a6e86f0.jpg", "https://media.discordapp.net/attachments/755890549659140146/844842058153197568/aba0e64c5c864578d62e87c2a5362fa1.jpg", "https://media.discordapp.net/attachments/755890549659140146/843416489402957844/ed5d0f19179d2dc352b383a4a01817a7.png", "https://media.discordapp.net/attachments/755890549659140146/842890759623409754/800013069-1.jpg", "https://media.discordapp.net/attachments/755890549659140146/842501819863531550/775930034ce387073dab970a9b60b33b.jpg", "https://media.discordapp.net/attachments/755890549659140146/842153849480282112/pp.jpg", "https://media.discordapp.net/attachments/755890549659140146/841661329282039817/indir_10.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Neon Photo")
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
