const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    var help = new Discord.MessageEmbed()
        .setAuthor("Help :")
        .setDescription("**Prefix : /nsfw **\n List of Commands!")
        .addField(
            "NSFW  :underage: :",
            "`4k`, `anal`, `ass`, `hentai`, `hkitsune`, `hneko`, `holo`, `kemonomimi`, `neko`, `pussy`"
        )
    message.channel.send(help);
};