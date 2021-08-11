const {
	MessageEmbed
} = require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "Youtube",
    category: "INFORMATION COMMANDS",
	aliases: ["youtube", "yt"],
	cooldown: 2,
	usage: "github",
	description: "Shows you the Creator Youtube.",
	run: async (client, message, args, user, text, prefix) => {
			message.channel.send(new MessageEmbed()
				.setTitle(`This Bot is made by \`skiitle#0100\` and **** please support the creator by subscribing his channel`)
				.setURL("https://bit.ly/mikami_yt")
				.addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
				.addField("FFMPEG: ", "\`v4.1.6-1\`", true)
				.addField("Node.js: ", "[\`v15.3.4\`](https://nodejs.org/en/)", true)
				.addField("Distube: ", "[\`v2.8.7\`](https://distube.js.org)")
				.addField("Billi. ", " please [subscribe](https://bit.ly/mikami_yt) me too![\`Click here\`](https://bit.ly/mikami_yt)")
				.setColor(config.colors.yes)
				.setFooter("Musicium | by: skiitle#0100", client.user.displayAvatarURL())
			);
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
