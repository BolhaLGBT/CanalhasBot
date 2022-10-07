const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('circadia')
		.setDescription('circadia'),
	async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/attachments/789976391692713989/900012076058161182/unknown.png');
	},
};