const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hehe1')
		.setDescription('É o Xiukas em formato de gif!'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/7DHT3uw.gif');
	},
};