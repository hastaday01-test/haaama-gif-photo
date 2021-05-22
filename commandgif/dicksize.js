const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-animal','animal-gif','gifanimal','animalgif'],

  permLevel: 0

};

exports.help = {

  name: 'text',

  description: 'rexuss',

  usage: 'text'

};

    //Start
    message.delete();
    let sizes = [
      "kurd",
      "roshek",
      "HaaMa",
      "juana",
      "hastaday",
      "bot dalem law bandana",
      "dayday",
      "8=======D",
      "8========D",
      "8=========D",
      "8D",
      "D",
      "hama",
      "esta to lagal ke D",
      "poli6",
      "wa arOm chetr nambenawa",
      "Rozhek darom",
      "Dndbs",
      "hdhwhd"
    ];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(``)
      .setDescription(`**\n${Result}**`)
   // .setFooter(`Requested by ${message.author.username}`)
  //    .setTimestamp();
    message.channel.send(embed);

    //End
  }
};
