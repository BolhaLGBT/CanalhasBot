const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('plass1')
		.setDescription('Plass sendo incompetente parte 1'),
	async execute(interaction) {
		return interaction.reply('https://giphy.com/gifs/4FODmXR1ABBsKVlFo7');
	},
};