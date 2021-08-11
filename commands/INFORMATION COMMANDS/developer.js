const {
	MessageEmbed
} = require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "developer",
    category: "INFORMATION COMMANDS",
	aliases: ["dev", "tomato"],
	description: "Shows Information about the Developer",
	useage: "developer",
	run: async (client, message, args) => {
			message.channel.send(new MessageEmbed()
				.setColor(config.colors.yes)
				.setFooter("Musicium | by: skiitle#0100", client.user.displayAvatarURL())
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/17ccf170d62e5e0040660d003b075528.webp")
				.setTitle("skiitle#0100 | Dev of 3 Orgs | Developer of 200+ BOTS")
				.setURL("nightrow.eu")
				.setDescription(`
			> Hello I am **Tomato** <@768441096887730177> *(\`skiitle#0100\`)*, and i made more then 200 different Discord Bots: [My WEBSITE](https://nightrow.eu)

			> I am very proud for all of my verified and not verified Discord Bots, but the Bot I am the most proud of is: [**Musicium** | \`Ultimate Music experience\`](nightrow.eu) <@769642999227351070>

			> Even more proud, or as proud I am about: [**Lava Music** | \`2021's Best Music Bot\`](https://lava.skiitle#0100) <@742672021422342165>

			> I made this Bot, and you can get a free Bot too! Just go to: [My Service](https://nightrow.eu)

			> I am also a **Website** Developer and **Plugin** dev. I made **Modules** like a **SPEECH Module** [SEE IT](https://cdn.discordapp.com/attachments/778714123785076768/801606374105546782/2021-01-21_01-15-50.mp4)

			> Yeah i hope you like my stuff :v: <3`)
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
