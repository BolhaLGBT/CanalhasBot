const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anjits')
		.setDescription('ta fraco'),
		async execute(interaction) {
		return interaction.reply('https://i.imgur.com/I5Fwa91.png');
	},
};



