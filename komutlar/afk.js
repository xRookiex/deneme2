const Discord = require('discord.js');

exports.run = async (client, message, args) => {


    let sebeb = args.join(" ");
    if(sebeb.length < 1) {
        return message.reply('AFK Sebebini Belirtmelisin.')
    } else {  
        message.delete()
        const afk = new  Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('AFK')
        .setDescription(`${message.author.username} │ Adlı Kullanıcı **${sebep}** Yüzünden Afk Oldu!`)
        .setFooter('lessoN AFK Sistem', client.user.avatarURL)
        .setTimestamp()
        message.channel.send(afk);
     
      }

     
     
  };

  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['afk', 'afkol'],
      permlevel: 0,
  };

  exports.help = {
      name: 'afk',
      description: 'kaccm',
      usage: 'afk'
  };