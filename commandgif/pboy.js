const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711478496854019/850643539762216990/f346b215989993bb8446a16cbfc46e0e.jpg", "https://media.discordapp.net/attachments/608711478496854019/850515627798167562/image0.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470584366006323/e881eee8f6f1c80a30099ec03d33346e.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470577600069673/e412dee8826665829583851608d25f67.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470567994720256/e83cd08d000acd97899e81e60d886c8a.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470559643861013/e71b0494087becd191328f257d387035.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470515294732368/e3dce0a996e37a66a3c29abc83a1571f.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470512324116510/e1ae3d5a0955dd61e297199af70bee10.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470504283242586/download_3.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470499749986354/dff1398fc6d483f9e2acb5d710e20902.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470497536049182/dfbc38acc065719cdc92b10298ebb309.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470493408854016/dedfcbdb87daa7ead2ec296a39da3845.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470417507287070/c6015cd4e66422d00e74b3ba182d2e9d.jpg", "https://media.discordapp.net/attachments/608711478496854019/850470409206890496/c67fd367c173395a77e51a65814a7b4d.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Photo Boy")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['photo-boy','boy-boy','pboy','boyp'],

  permLevel: 0

};

exports.help = {

  name: 'pboy',

  description: 'rexuss',

  usage: 'pboy'

};
