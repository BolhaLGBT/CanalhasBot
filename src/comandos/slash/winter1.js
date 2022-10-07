const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('winter1')
		.setDescription('Winter tiltado'),
	async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/attachments/878944845396340736/880181061710147695/unknown.png');
	},
};