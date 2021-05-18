const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/820811352087330828/820954968793284658/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821516515391045642/image1.gif", "https://media.discordapp.net/attachments/687763784902770691/802939838793908244/a_b4686f704471be16d09d1cc6506cb4ce.gif", "https://cdn.discordapp.com/attachments/742107775475253259/770320501204713472/image0-12.gif", "https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif", "https://cdn.discordapp.com/attachments/737803232600129608/799869130014064681/g7.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800850948078698566/000_1-2.gif", "https://cdn.discordapp.com/attachments/742107775475253259/766092295949910056/image2.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818627992007344158/image0.gif", "https://cdn.discordapp.com/attachments/742107775475253259/821167015322320916/image4.gif", "https://media.discordapp.net/attachments/659108278969696256/802937736675852318/image1.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818627981580566568/image4.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818630968776065064/image0.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif", "https://cdn.discordapp.com/attachments/742107775475253259/818633362616614912/image2.gif", "https://media.discordapp.net/attachments/694695166895849562/797086937068077106/20210106_210640.gif", "https://cdn.discordapp.com/attachments/737803232600129608/799869125601918996/g5.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800850872401657886/dfdc034aab34632039e45f23a089278f.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800848548798791680/image8-1.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800859020608405514/gif1460.gif", "https://cdn.discordapp.com/attachments/787757651752779826/800852701335912498/image3-1.gif, "https://media.discordapp.net/attachments/608711473652563968/844266970253230080/image0-5.gif", "https://media.discordapp.net/attachments/608711473652563968/844264899918954536/a_d2392ab2fc58d0204d5c59dd5c32b596.gif", "https://media.discordapp.net/attachments/608711473652563968/844264180088963082/469.gif", "https://media.discordapp.net/attachments/608711473652563968/844264155988230148/a_3841a5b5d7803446ae474efe161298de.gif", "https://media.discordapp.net/attachments/608711473652563968/844264144784982067/a_677837870a79b1b5b44683af23ead9c7.gif", "https://media.discordapp.net/attachments/608711473652563968/844264109594640444/image0-4-1.gif", "https://media.discordapp.net/attachments/608711473652563968/844261598243323904/a_a73737d942495103ddbaa4dcee0e331f.gif", "https://media.discordapp.net/attachments/608711473652563968/844261584321904661/a_408c225862dc408515fdcea0666da7f7.gif", "https://media.discordapp.net/attachments/608711473652563968/844261567305744496/a_1c62b0d92c47fd4cb0064a354e3ec5b2.gif", "https://media.discordapp.net/attachments/608711473652563968/844261575754121237/a_1c95c8cf5316236555087f55ec4347e2.gif", "https://media.discordapp.net/attachments/608711473652563968/844261118452826142/a_9f683e1b566dc917812e35e53699404f.gif", "https://media.discordapp.net/attachments/608711473652563968/844259980285575188/a_a089b51c0f190b6d7bbc016fe2da0f0a.gif","https://media.discordapp.net/attachments/608711473652563968/844259974427312228/a_d323146a903bc49c233c8cb5988b6a6a.gif","https://media.discordapp.net/attachments/608711473652563968/844259973769068554/a_bd6575e5bdb74418acd1f0cdfc1f797f.gif","https://media.discordapp.net/attachments/608711473652563968/844259963828437002/a_9cb426a5ae84bb0f86521d7adeef22d9.gif","https://media.discordapp.net/attachments/608711473652563968/844259924086751342/a_77a69ebb988feca3b2e1c33289318757.gif","https://media.discordapp.net/attachments/608711473652563968/844259870353915914/a_03e74d813b68a7e7834f37d8be48b261.gif","https://media.discordapp.net/attachments/608711473652563968/844259023133999174/a_84a3e6f5854e9b9c8f92badf76f19b7e.gif", "];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Girl Gif")
.setColor("RANDOM")
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-girl','girl-gif','gifgirl','girlgif'],

  permLevel: 0

};

exports.help = {

  name: 'girl',

  description: 'rexuss',

  usage: 'girl'

};
