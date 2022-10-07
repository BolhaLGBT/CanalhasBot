const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('roupinha')
  .setDescription('Escolha um amigo(a) para doar uma roupinha')
  .addUserOption(option => option.setName('sissela').setDescription('Escolha uma pessoa.')),

  async execute(interaction, message, client) {

    return interaction.reply(`Toma aqui sua roupinha \nhttps://i.imgur.com/RnSGBq4.png`);
  },
};