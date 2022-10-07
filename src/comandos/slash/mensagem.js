const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('mensagem')
    .setDescription('Digite um texto para o bot mandar.')
    .addStringOption(option => option
    .setName('texto')
    .setDescription('Escreva o texto.')
    .setRequired(true)),
		async execute(interaction) {

		const textinho = interaction.options.getString('texto');	

		return interaction.reply(`${textinho}`);
	},
};



