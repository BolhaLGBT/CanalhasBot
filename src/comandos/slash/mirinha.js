const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mirinha')
		.setDescription('Mirinha matador de iniciante.'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/Zo5Jf2L.png');
	},
};