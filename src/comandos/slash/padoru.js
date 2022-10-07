const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('padoru')
    .setDescription('HASHIRE SORI YO KAZE NO YOU NI TSUKIMIHARA WO PADORU PADORU'),
    async execute(interaction, args) {

        interaction.reply(`

HASHIRE SORI YO <:annies8Padoru:795445463117594657>
KAZE NO YOU NI <:annies8Padoru:795445463117594657>
TSUKIMIHARA WO <:annies8Padoru:795445463117594657>
PADORU PADORU <:annies8Padoru:795445463117594657>

HASHIRE SORI YO <:annies8Padoru:795445463117594657>
KAZE NO YOU NI <:annies8Padoru:795445463117594657>
TSUKIMIHARA WO <:annies8Padoru:795445463117594657>
PADORU PADORU <:annies8Padoru:795445463117594657>

HASHIRE SORI YO <:annies8Padoru:795445463117594657>
KAZE NO YOU NI <:annies8Padoru:795445463117594657>
TSUKIMIHARA WO <:annies8Padoru:795445463117594657>
PADORU PADORU <:annies8Padoru:795445463117594657>

HASHIRE SORI YO <:annies8Padoru:795445463117594657>
KAZE NO YOU NI <:annies8Padoru:795445463117594657>
TSUKIMIHARA WO <:annies8Padoru:795445463117594657>
PADORU PADORU <:annies8Padoru:795445463117594657>

HASHIRE SORI YO <:annies8Padoru:795445463117594657>
KAZE NO YOU NI <:annies8Padoru:795445463117594657>
TSUKIMIHARA WO <:annies8Padoru:795445463117594657>
PADORU PADORU <:annies8Padoru:795445463117594657>

        `);
    },
};
