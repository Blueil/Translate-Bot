const Discord = require('discord.js');
const translate = require('google-translate-api');

const client = new Discord.Client();

client.on("ready", () => {
    console.log("The bot is ready.");
});


client.on("message", (message) => {
	const args = message.content.slice(message.length);
	
	if (message.content.startsWith("Minecraft") & !message.author.bot) {
		let text = args.slice(0);
			translate(text, {to: 'iw'})
				.then(res => message.channel.send(res.text))
	}
})

client.login('NTY2MTMzMTU4MzQxNTA5MTMw.XevUUQ.wlhbAzl22H8r7lJa4gAbQxXdrA8');