
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @kisi 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("**Birini Etiketle...**");
  if(tomute.hasPermission("BAN_MEMBERS")) return message.reply("**Yetkililere Veremem...**");
  let muterole = message.guild.roles.find(`name`, "Muted");
 
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("**Lütfen Zaman Belirt...**\n**NOT: 1saat vereceksen 1h , 1dakika vereceksen 1m, 1gün vereceksen 1d  yazman yeterli 1 yerine İstediğin Bir Değer Yazabilirsin... **");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> **Adlı Kullanıcıya Mute Verildi Verilen Zaman :** \`\` ${ms(ms(mutetime))}\`\` `);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> **Mutesi Kaldırıldı...**`);
  }, ms(mutetime));



}
exports.conf = {
    aliases: ['mute'],
    permLevel: 0
};

module.exports.help = {
    name: "tempmute",
    description: "Etiketlenen Kişiye Sürel Mute Atar",
    usage: "tempmute [kullanıcı] [zaman]"
}