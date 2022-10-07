const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servinhu1')
		.setDescription('Melhores jogadas do Servinhu'),
	async execute(interaction) {
		return interaction.reply('https://i.imgur.com/6C8Kfxv.mp4');
	},
};