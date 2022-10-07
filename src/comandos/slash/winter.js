const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('winter')
		.setDescription('Melhores jogadas do WinterTrash'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/0HVvNxm.gif');
	},
};