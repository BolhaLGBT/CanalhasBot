const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('farmer')
		.setDescription('Grêmio timido.'),
	async execute(interaction) {
		return interaction.reply(` ﾠ :flushed: 
:point_right: :point_left:
Grêmio Tímido
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢛⣉⣥⣶⡖⠚⠛⠛⠛⠛⢲⣶⢬⣍⡛⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⣡⡶⠏⠁⠄⠄⢉⣷⣶⣶⣶⣾⡉⠄⠄⠈⠙⢷⣌⠻⣿⣿⣿⣿⣿
⣿⣿⣿⡟⣡⣾⠋⠄⠄⠄⠄⢰⣾⣿⠿⠿⡿⣿⣿⣆⠄⠄⠄⠄⠈⣳⣎⠻⣿⣿⣿
⣿⣿⠟⣴⠋⠄⠙⠲⢄⣀⠄⣿⣿⣭⣧⣴⣥⣥⣿⣿⡄⢀⣠⠔⠊⠁⠘⣧⠙⣿⣿
⣿⡟⣰⡏⠄⠄⠄⠄⠄⠉⠙⠛⠻⠿⠿⠿⠿⠿⠿⠛⠛⠉⠁⠄⠄⠄⠄⠸⣦⢹⣿
⣿⠃⣿⠄⣠⡤⣄⡀⢠⣤⣤⣄⢠⣬⣭⣤⣤⣤⠄⢀⣤⠄⡄⢀⣠⢤⣄⠄⣿⡌⣿
⣿⠄⣿⢸⡇⠄⣈⣁⢸⣀⣀⡟⢸⣧⣤⡄⣿⣿⡄⣸⢹⠄⡇⣿⠁⠄⢸⡇⢸⡇⣿`);
	},
};