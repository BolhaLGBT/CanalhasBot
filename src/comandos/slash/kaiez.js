const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kaiez')
		.setDescription('Pantsgrab'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/NjpPsXo.png');
	},
};