const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('plass')
		.setDescription('Ui ui, olha esse iniciante'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/BFVc6cm.png');
	},
};