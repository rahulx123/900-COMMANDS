const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
    aliases: ["add"],
    category: "INFORMATION COMMANDS",
    description: "Invite the Bot to your Server",
    useage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle("Invite, Musicium")
            .setDescription("[INVITE ME NOW, thanks](https://bit.ly/mikami_yt)\n\n[Invite 2021's Fastest Music Bot](https://lava.skiitle#0100)")
            .setFooter("Musicium", client.user.displayAvatarURL())

        message.reply(inviteembed);
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
