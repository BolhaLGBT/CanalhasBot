const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('queueranked')
		.setDescription('É 16HRS DÁ FILA NESSA PORRAAAA!!!'),
	async execute(interaction) {
		return interaction.reply('<:Madge:876181741176496169> :point_right: :clock4: <:goqueue:862153676960956437>');
	},
};