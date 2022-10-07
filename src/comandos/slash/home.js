const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('home')
		.setDescription('QUEUE RANKED'),
	async execute(interaction) {
		return interaction.reply('https://media.discordapp.net/attachments/789976391692713989/865701560079351868/Queue_Ranked.gif');
	},
};