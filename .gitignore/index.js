const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("BOT d'aide du MEC");
    console.log("Connected");

});

bot.login(process.env.TOKEN)

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Invité')
    member.addRole(role)

})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel =>{
        return channel.send("A Définir")
    }).catch(console.error);
});

bot.on('messageReactionAdd', (reaction, user) => {
    var role = reaction.message.guild.roles.find('name', 'Joueur');
    var member = reaction.message.guild.member(user); 
    if(reaction.emoji.name === '⚙'){
    member.addRole(role);
    console.log('Fait')}
    })
