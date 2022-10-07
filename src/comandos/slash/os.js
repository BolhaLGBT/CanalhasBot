const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder } = require('discord.js');
const axios = require('axios').default;
const { calcElo } = require('../../services/calcElo');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('os')
    .setDescription('Os 10 melhores jogadores do Omega Strikers'),
  async execute(interaction, message, client) {

    axios.defaults.headers = {
      "Accept": "application/json",
      "Accept-Encoding": "deflate, gzip",
      "User-Agent": "X-UnrealEngine-Agent",
      "X-Request-ID": "2A1A062A4CE9D0F3335593B20E326D57",
      "X-App-Session-ID": "51729A4B-4CA6-8D5E-840D-F6A630DB4A6A",
      "X-Odyssey-GameVersion": "1.0.533",
      "X-Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmViNjMzODc2YTY3Zjk5MTU3N2NlNGUiLCJ1c2VyIjoibmljYTg4MjUiLCJyb2xlIjoiUGxheWVyIiwiaXNzIjoib2R5c3NleWludGVyYWN0aXZlLmdnIiwic2Vzc2lvbklkIjoiYjk1ZTVkZDQtZjhiYy00OWQxLWE2YjktODIwZDE4ODJiMjBkIiwiaWF0IjoxNjYzMzU1NzM1LCJleHAiOjE2NjMzNTY2MzV9.FH2Ln4igId11GHxhlp3jJ6nMdOORISc4A4Bzb7pmo-s",
      "X-Refresh-Token": "74235ffcf0363da7b83dd948927cd9f53b9dd34888c40b619900bc08339cc79e3848347ecf303ca5"
    }

    const ranking = await axios.get(`https://prometheus.odysseyinteractive.gg/api/v1/ranked/leaderboard/players?startRank=0&pageSize=10&specificRegion=SouthAmerica`);

    let rank = "";
    let wins = "";
    let mmr = "";
    let elo = "";

    for(var i=0; i < ranking.data.players.length; i++) {
      rank += ranking.data.players[i].rank + ' - ' + ranking.data.players[i].username + "\n";
      mmr += ranking.data.players[i].rating + ' - ' + "**" + calcElo(ranking.data.players[i].rating) + "**" + ' - ' + ranking.data.players[i].games + "\n";
      wins += ranking.data.players[i].wins + ' - ' + ranking.data.players[i].losses + ' | ' + Math.round((ranking.data.players[i].wins / ranking.data.players[i].games) * 100) + "%" + "\n";
      elo += calcElo(ranking.data.players[i].rating) + "\n";

    }

    const embed = new EmbedBuilder()
    .setDescription('TOP 10 do Omega Strikers - **SÃO PAULO**')
    .addFields({ name: 'N. | Nome', value: `${rank}`, inline: true })
    .addFields({ name: 'MMR | Elo | Partidas', value: `${mmr}`, inline: true })
    .addFields({ name: 'V | D | W%', value: `${wins}`, inline: true })
    .setColor('#FFFFFF')
    return interaction.reply({ embeds: [embed] });

  },
};