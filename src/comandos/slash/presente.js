const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const fs = require('fs');
const wait = require('util').promisify(setTimeout);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('presente')
    .setDescription('Abra o seu presentinho.'),
  async execute(interaction, message) {

//Filtro
const filter = i => i.customId === 'recompensa';

//Collector
const collector = interaction.channel.createMessageComponentCollector();
collector.on('collect', async i => {
    if (i.customId === `resgatar`) {     
      
    await i.update({ content: 'https://i.imgur.com/mO5SCDY.gif', components: [] }).catch(err => console.log('123'))
    await wait(2500);
    await interaction.editReply('<:Madge:876181741176496169> :point_right: :clock4: <:goqueue:862153676960956437>').catch(err => console.log('123'))
  }
});

//Resgatar
let resgatar = new MessageActionRow()
 .addComponents(
  new MessageButton()
.setCustomId(`resgatar`)
.setLabel('Abrir baú')
.setEmoji('<:key:927744143214649404>')
.setStyle('SECONDARY'),
            );   
await interaction.reply({ content: 'https://cdn.discordapp.com/attachments/926329019295735828/927744534643892264/bau.png', components: [resgatar] })

  },

};
