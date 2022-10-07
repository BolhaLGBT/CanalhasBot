const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hehe')
		.setDescription('É o Xiukas!'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/Yy6JE0G.png');
	},
};