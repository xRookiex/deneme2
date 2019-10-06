const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
const emoji = (client.emojis.find("name", "onaytik"))
const emoji1 = (client.emojis.find("name", "siren"))
let verifyroless = message.guild.roles.find(`name`, "＊ Kural Yok Commanders");
if (!message.member.roles.find("name", "＊ Kural Yok Commanders")) {
return message.channel.send(`Bu Komutu Kullanmak için ** ＊ Kural Yok Commanders** Rolüne Sahip Olman Lazım ${emoji1}`)
}
let toverify = message.guild.member(message.mentions.users.first());
let verifyrole = message.guild.roles.find(`name`, "🎀 | Bendis");
if (!verifyrole) return message.reply("Rol Bulunamadı Lütfen '🎀 | Bendis' Adıyla Rol Oluşturunuz.");
if (!toverify) return message.reply("Bir kullanıcıdan bahsetmelisin.");
await (toverify.addRole(verifyrole.id));

let veriflog = message.guild.channels.find(`name`, "rol-log");
if (!veriflog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen 'rol-log' Adlı Kanal Oluşturunuz.`");
let vUser = message.guild.member(message.mentions.users.first());
let amcıkl = new Discord.RichEmbed()
.setColor('RANDOM')
.setFooter('々 Astrayos Bot 々');
veriflog.send(amcıkl);
vUser.removeRole('606433967159246851')
let verifembed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`${vUser} **kişisine** ${verifyrole} **rolü verildi.** ${emoji}`)
.setFooter('々 Astrayos Bot 々');
veriflog.send(verifembed);
let emojilan = message.guild.emojis.find(emoji => emoji.name === "onaytik");
message.react(emojilan);





}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['kız','k'],
};

exports.help = {
name: 'kız',
description: 'Kullanıcı İçin Doğrulandı Rolünü Verir.',
usage: 'kız'
}