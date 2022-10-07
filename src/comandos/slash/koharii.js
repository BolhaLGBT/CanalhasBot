const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('koharii')
		.setDescription('Me jogue ao kohas'),
	async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/attachments/789976391692713989/893650980011393034/unknown.png');
	},
};