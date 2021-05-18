const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif","https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif","https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif","https://media.discordapp.net/attachments/608711476219478045/844252334539931738/a_04e406e03dd95e6463fef895eac48ddc.gif","https://media.discordapp.net/attachments/608711476219478045/844248606197153822/a_7debee216de2b3edfd69709f2fbdd830.gif","https://media.discordapp.net/attachments/608711476219478045/844247005894803526/kat2.gif","https://media.discordapp.net/attachments/608711476219478045/844246979978461184/a_ffa04103eed5e17b28b8a64b144cba7d.gif","https://media.discordapp.net/attachments/608711476219478045/844239577605734430/unnamed_28-1.gif","https://media.discordapp.net/attachments/608711476219478045/844179420079194132/a_8e95542de936712b322b1a007816f752.gif","https://media.discordapp.net/attachments/608711476219478045/844161739851300904/58.gif","https://media.discordapp.net/attachments/608711476219478045/844146359484547102/erkek.gif","https://media.discordapp.net/attachments/608711476219478045/844146316304711680/man.gif","https://media.discordapp.net/attachments/608711476219478045/844109473588576256/a_5ab9ae6528ba349a768038f2fbf99296.gif","https://media.discordapp.net/attachments/608711476219478045/844105677328482324/gul_gibiydi_guluslerim_rawies.gif","https://media.discordapp.net/attachments/608711476219478045/844102346085892107/Man_PP_Gif_86.gif","https://media.discordapp.net/attachments/608711476219478045/844102264720326656/RADALIUM_GIF_153.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Boy")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-boy','boy-gif','gifboy','boygif'],

  permLevel: 0

};

exports.help = {

  name: 'boy',

  description: 'rexuss',

  usage: 'boy'

};
