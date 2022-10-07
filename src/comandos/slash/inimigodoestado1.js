const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inimigodoestado1')
		.setDescription('Winter, o inimigo do estado 😎'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/Fms7YzB.png');
	},
};