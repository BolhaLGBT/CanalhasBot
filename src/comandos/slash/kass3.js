const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kass3')
		.setDescription('Kass sendo sanduichada'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/Usrmdfc.gif');
	},
};