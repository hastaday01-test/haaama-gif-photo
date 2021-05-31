client.on(`message`, async (message) => {
  if (message.author.bot) return;
  
  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if(prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if(message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed()
                  .setColor("#146DF6")
                 .setDescription(`
Support Server - [Click Me](https://discord.gg/VWuQfQfjc9)
Bot Link - [Click Me](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)
`)
                  .setTitle(`
Join a voice channel and \`${PREFIX}play\` a song.
Type \`${PREFIX}help\` for the list of commands.`));
  } 
  //An embed announcement for everyone but no one knows so fine ^w^
  if(message.content.startsWith(`${prefix}embed`)){
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(remix)
    .setFooter("remix", client.user.displayAvatarURL())
    //delete the Command
    message.delete({timeout: 300})
    //send the Message
    message.channel.send(embed)
  }
