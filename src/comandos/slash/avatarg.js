const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatarg')
		.setDescription('Avatar opiniões'),
		async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/attachments/789976391692713989/893741293925179432/unknown.png');
	},
};