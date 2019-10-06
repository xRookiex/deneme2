const Discord = require('discord.js');


exports.run = function(client, message,) {

// Avatar linkini ekleyin.
let avatar = "https://cdn.discordapp.com/avatars/515525815455318016/b70f9f88c8c48b630b0646bbae39aa57.png?size=512"


const embed = new Discord.RichEmbed()
        .setTitle(`Geliştirici`)
        // Discord nickinizi ve idnizi ekleyin, isteğe göre bağlantı ekleyebilirsiniz.
        .setDescription(` **々 Rookie ＊#7992** \n`)
        .setImage(avatar)
    .addField("Suncu Davet Linki", "[Davet](https://discord.gg/cTzdTb4)",true)
        .setColor(3447003)
       

        message.channel.send(embed)
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['owner', 'kurucum','developer','sahip'],
  permLevel: 0
};

exports.help = {
  name: 'developer',
  description: 'Bot sahibinin profilini gösterir.',
  usage: 'developer'

};