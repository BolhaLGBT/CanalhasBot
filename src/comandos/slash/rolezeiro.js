const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rolezeiro')
		.setDescription('ROROLEZEIRO OPINIÕES'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/YQYYv7Z.png');
	},
};