
const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => { 
  
  if(!['784089174562308096'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`<a:witcher_uyari:783687116181471294> Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta \n `))

  let tag = "୪";
  const yetkili = message.guild.roles.cache.get("783342095141699624").members.size
  const booster = message.guild.roles.cache.get("784356301588660224").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
message.channel.send((`
** Sunucumuzda Toplamda ${toplam} Üye Bulunmakta 

 Aktif ${online} Kullanıcı Bulunmakta 

 Ailemize Katılmış ${ttag} Kişi Bulunmakta 
 
 Ses Kanallarında ${ses} Kişi Bulunmakta 
 
 Sunucumuzda Toplamda ${booster} Booster Üye Bulunmakta 

 Yetkili ${yetkili} Kişi Bulunmakta**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}

