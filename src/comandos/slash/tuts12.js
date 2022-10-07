const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tuts12')
		.setDescription('tuts12'),
	async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/attachments/789976391692713989/900032521796988979/unknown.png');
	},
};