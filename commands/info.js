const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Marktplaats')
            .setDescription("Custombot")
            .setColor("#eba465")
            .addField("Bot naam", client.user.username)

            .setThumbnail('https://i.imgur.com/Xw7ueQe.jpg')
            .setTimestamp()
            .setFooter('Marktplaats', 'https://i.imgur.com/Xw7ueQe.jpg');

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}