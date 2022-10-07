const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kaiez1')
		.setDescription('Procuro namorada!!!'),
	async execute(interaction) {
		return interaction.reply('Procuro namorada!!! \nhttps://cdn.discordapp.com/attachments/789976391692713989/919664615317721118/unknown.png');
	},
};