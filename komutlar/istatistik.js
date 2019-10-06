exports.run = function(client, message, args) {

    message.channel.send(`**:satellite: Anlık Bot Bilgileri**`);
    message.channel.send(`Sunucu Sayısı; **${client.guilds.size.toLocaleString()}** `);
    message.channel.send(`Kullanıcılar; **${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`);
    message.channel.send(`Ping ; **${client.ping}**`);
        };
    
    module.exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
      permLevel: 0
    };
    
    module.exports.help = {
      name: 'istatistik',
      description: 'Botunuzun istatistik bilgilerini gönderir.',
      usage: 'istatistik'
    };