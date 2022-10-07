const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tuts13')
		.setDescription('5 fps'),
		async execute(interaction) {
		return interaction.reply('https://i.imgur.com/kffmrJ9.png');
	},
};



