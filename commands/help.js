const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Display all commands and descriptions",
    execute(message) {
        let helpEmbed = new MessageEmbed()
            .setTitle("👋  Hello There! All The Help You Need Is Here")
            .setThumbnail({
                files: [
                    {
                        attachment: "../src/img/SERVER_ICON.jpg",
                        name: "SERVER_ICON.jpg"
                    }
                ]
            })
            .setColor("#00FF00")
            .addFields(
                { name: "\u200B", value: "\u200B" },
                {
                    name: "📋  /rules",
                    value: "Will Guide you with server rules."
                },
                { name: "\u200B", value: "\u200B" },
                {
                    name: "🎵  Music Streaming",
                    value:
                        "You can stream you'r YouTube and SoundCloud playlists!"
                },
                {
                    name: "/join & /leave",
                    value:
                        "Use these commands to join and disconnect the bot from you'r voice channel."
                },
                {
                    name: "/play",
                    value: "Use this command along with a URL to stream music."
                },

                { name: "\u200B", value: "\u200B" },

                {
                    name: "📻  Stream Live Radio",
                    value:
                        "If you ever ran into an error use /leave command and retry"
                },
                {
                    name: "Yes Fm",
                    value: "/stream yesfm",
                    inline: true
                },
                {
                    name: "Sun Fm",
                    value: "/stream sunfm",
                    inline: true
                },
                {
                    name: "Kiss Fm",
                    value: "/stream kissfm",
                    inline: true
                },
                {
                    name: "Gold Fm",
                    value: "/stream goldfm",
                    inline: true
                },

                {
                    name: "TNL Radio",
                    value: "/stream tnlfm",
                    inline: true
                },
                {
                    name: "Fox Radio",
                    value: "/stream foxfm",
                    inline: true
                },
                { name: "\u200B", value: "\u200B" },
                {
                    name: "🌐  /ping",
                    value: "To check your latency with the bot"
                }
            )

            .setFooter(
                "All For One Bot is still on alpha stage contribution would be appreciated ❤️"
            )
            .setTimestamp();
        return message.author.send(helpEmbed).catch(console.error);
    }
};
