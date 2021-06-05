const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711474952798221/850629443026419752/f3bfd48e2e20b387d5971c5fea0b8d34.png", "https://media.discordapp.net/attachments/608711474952798221/850629415380451328/9244cfa0460e52cb97990acbeca49cba.webp", "https://media.discordapp.net/attachments/608711474952798221/850629403305050113/910eabc3d85a75dd518e84ad13cb4d7f.webp", "https://media.discordapp.net/attachments/608711474952798221/850629365762883584/5838d3454121aee3343faa1012d6b063.webp", "https://media.discordapp.net/attachments/608711474952798221/850629353007349810/7bc38d0e13eb7d5338ad8c3c1e55f937.webp", "https://media.discordapp.net/attachments/608711474952798221/850629340152856576/190acfe75241d06180483b6ce3e5b8fc.webp", "https://media.discordapp.net/attachments/608711474952798221/850629327875604520/8b378c126fe3bac7c41a6dccb8efa24d.webp", "https://media.discordapp.net/attachments/608711474952798221/850628755168690226/5e88cce1c32de06f23bf9d270c006088.png", "https://media.discordapp.net/attachments/608711474952798221/850628725497921556/c606e2b808b06d09bea7245185eec8fe.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628690135351316/ade5b5a9ae0e25a496898c2d8e6609b0.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628659013746698/d9892f9722a58082c07e4c6120364e80.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628594589237288/cf9a462208b18ae0b5b70cf0b9534f58.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628504860360714/baf4d15b4d0fbf23feb746e75c6c83b1.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628454818381824/13dc2bfff51fe7c9405c31bc29c93770.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628420471226398/247f8eb753d379f3181c865bbf86806d.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628338292752384/9499dd4d6cd0c40c2f83287cdc7c49d5.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628302825848842/b1078d58deb757e5fcadfddd95b7e051.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628206175453184/868b2ccadb0ce32d7a10364f7860046e.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628152291491850/70681801440d53a19d117306cffba9b7.jpg", "https://media.discordapp.net/attachments/608711474952798221/850628049187242024/f843281881efdae089888718910e0452.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo Girl")
.setColor("RANDOM")
.setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['photo-girl','girl-photo','pgirl','girlp'],

  permLevel: 0

};

exports.help = {

  name: 'pgirl',

  description: 'rexuss',

  usage: 'pgirl'

};
