const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kass4')
		.setDescription('Kass sendo incompetente e morrendo para o meteorito.'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/EZwEh04.mp4');
	},
};