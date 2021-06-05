const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/615977782853238784/850263682906193930/af400ed4e8a97889b9517dedb40fef85.jpg", "https://media.discordapp.net/attachments/615977782853238784/850263646545510410/706398afd8028bd38e6c42fc7590e439.jpg", "https://media.discordapp.net/attachments/615977782853238784/850263596437078016/c880f8c723356f120fe4289d6fea9eda.jpg", "https://media.discordapp.net/attachments/615977782853238784/850263576781652008/e1d62c20bfecf19b64c395f363b24c03.jpg", "https://media.discordapp.net/attachments/615977782853238784/849741132149030962/69991b52926e9abe4ea22d078e592a72.png", "https://media.discordapp.net/attachments/615977782853238784/849741083424718919/3b117a5fc83ce3596d97e49e8ed50df4.png", "https://media.discordapp.net/attachments/615977782853238784/849740996199055400/912bc8dcc8b700ea68b5d34750b0781e.png", "https://media.discordapp.net/attachments/615977782853238784/849740730158022696/f879b7851190fa4e7a890315782b9e8a.png", "https://media.discordapp.net/attachments/615977782853238784/849740389824725052/2d43ac54c125b8017dc65aa3f11d7df7.png", "https://media.discordapp.net/attachments/615977782853238784/849613204694237219/6a416379426ec13fb937b84ba81df50a.jpg", "https://media.discordapp.net/attachments/615977782853238784/849613206435397650/yXc1pKN3_400x400.jpg", "https://media.discordapp.net/attachments/615977782853238784/849613102118207518/9a227c484e6f4f772bee44435fc79f88.jpg", "https://media.discordapp.net/attachments/615977782853238784/849613098812702741/69816f2c209b81983ecedf61259a8913.jpg", "https://media.discordapp.net/attachments/615977782853238784/848840752783425606/bil_.jpeg", "https://media.discordapp.net/attachments/615977782853238784/848769138923143218/8aa408fb27360137aa37ca35a09c88ca.jpg", "https://media.discordapp.net/attachments/615977782853238784/848769130424565820/0ed3a49a18a00eeb5bd154096b9efc93.jpg", "https://media.discordapp.net/attachments/615977782853238784/848769114054590464/caaadde5d9a3038d141b0f41387a1744.jpg"];

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

  aliases: ['Pbillie','pbillie','photo-billie','billiep'],

  permLevel: 0

};

exports.help = {

  name: 'pbillie',

  description: 'rexuss',

  usage: 'pbillie'

};
