const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "ping",
    aliases: ["latency"],
    category: "INFORMATION COMMANDS",
    description: "Returns latency and API ping",
    useage: "ping",
    run: async (client, message, args) => {
        return message.reply(
            new Discord.MessageEmbed()
            .setAuthor(`PING`, "https://cdn.discordapp.com/attachments/743944083470549063/777968158978867240/signal_strength.png", "https://bit.ly/mikami_yt")
            .setColor(config.colors.yes)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setDescription(`\`${client.ws.ping} ms\``)
        )
    }
}

/**
 * @INFO
 * Bot Coded by skiitle#0100 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://nightrow.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
