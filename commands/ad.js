const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !announcement title | bericht | kleur 

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#eba465")
            .setDescription(`Maak een advertentie door gebruik te maken van: \n !ad titel ${seperator} bericht ${seperator} prijs`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[3] === undefined) argsList[3] = "📣advertenties";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        prijs: argsList[2] || "Geen inhoud meegegeven",
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle("Advertentie")
        .setColor("#eba465")
        .setDescription(`Bericht van ${message.author} \n\n **${options.titel}** \n ${options.bericht} \n ${options.prijs}`)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Dit kanaal bestaat niet");

    channel.send(announceEmbed);

}

module.exports.help = {
    name: "ad",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}