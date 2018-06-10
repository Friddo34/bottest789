const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("BOT d'aide du MEC");
    console.log("Connected");

});

bot.login(process.env.TOKEN)

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Invités')
    member.addRole(role)

})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel =>{
        return channel.send("Bienvenue sur le Discord du Montpellier Esport Club ! \nVous faites maintenant partie des invités du Serveur. Vous pouvez profiter de cet accès pour commencer à échanger avec les membres dans les salons ouverts. Si vous souhaitez nous rejoindre, vous devez faire votre présentation et contacter un des membres du staff du MEC pour le signaler. Il faudra ensuite que vous remplissiez la fiche d'inscription (disponible sur le site : http://www.montpellier-esport-club.fr/rejoignez-nous/) et que vous vous acquittiez de la cotisation annuelle.")
    }).catch(console.error);
});

bot.on('messageReactionAdd', (reaction, user) => {
    var role = reaction.message.guild.roles.find('name', 'Joueur');
    var member = reaction.message.guild.member(user); 
    if(reaction.emoji.name === '⚙'){
    member.addRole(role);
    console.log('Fait')}
    })
