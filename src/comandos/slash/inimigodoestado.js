const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inimigodoestado')
		.setDescription('Borsa, o inimigo do estado 😎'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/jtUvdCT.png');
	},
};