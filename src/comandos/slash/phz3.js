const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('phz3')
		.setDescription('Buff Shoichi!'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/jMvMICv.mp4');
	},
};