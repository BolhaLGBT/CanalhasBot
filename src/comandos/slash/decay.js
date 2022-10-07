const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder } = require('discord.js');
const axios = require('axios').default;
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('decay')
    .setDescription('Verificar a inatividade da sua conta.')
    .addStringOption(option => option
      .setName('nickname')
      .setDescription('Nome de invocador.')
      .setRequired(true)),
  async execute(interaction, message, client) {

    await interaction.reply('Aguarde...')

    const nickname = await interaction.options.getString('nickname');
    if(nickname.length < 3) return interaction.reply('O nome de invocador precisa ter mais de **3 digitos**.');
    if(nickname.length > 16) return interaction.reply('O nome de invocador precisa ter **16 digitos** ou menos');

    //Headers - Riot Api
    axios.defaults.headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 OPR/90.0.4480.100",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://developer.riotgames.com",
      "X-Riot-Token": "RGAPI-07129043-ef59-4151-a124-b8923b778ef8"
    }

    //Endpoint
    const url = "https://br1.api.riotgames.com/lol";
    const region = "https://americas.api.riotgames.com/lol";

    //Strings
    const summoner = await axios.get(`${url}/summoner/v4/summoners/by-name/${nickname}`);
    const lvl = summoner.data.summonerLevel;
    const puuid = summoner.data.puuid;
    const id = summoner.data.id;
    const match = await axios.get(`${region}/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=100`)
    const elo = await axios.get(`${url}/league/v4/entries/by-summoner/${id}`);
    let tier = "";

    for(let i=0; i < elo.data.length; i++) {
      if(elo.data[i].queueType === 'RANKED_SOLO_5x5') {
        tier = elo.data[i].tier;
      }
    }

    if(tier === 'IRON') {
      return interaction.editReply({ content: 'No Elo' })
    } else if (tier === 'BRONZE') {
      return interaction.editReply({ content: 'No Elo' })
    } else if (tier === 'SILVER') {
      return interaction.editReply({ content: 'No Elo' })
    } else if (tier === 'GOLD') {
      return interaction.editReply({ content: 'No Elo' })
    } else if (tier === 'PLATINUM') {
      return interaction.editReply({ content: 'No Elo' })
    } else if (tier == false) {
       return interaction.editReply({ content: 'No Elo' })
    }

    for(let i=0; i < match.data.length; i++) {
      finish = await axios.get(`${region}/match/v5/matches/${match.data[i]}`);

      if(finish.data.info.queueId === 420) {

        timesTamp = finish.data.info.gameEndTimestamp;
        let games = new Date(timesTamp);
        let atual = new Date();

        let diferenca = atual.getDate() - games.getDate()

        let diasfaltando;
        let mensagem;

        if(tier === 'DIAMOND') {
          diasfaltando = 28 - diferenca;
        } else if (tier === 'MASTER') {
          diasfaltando = 14 - diferenca;
        } else if (tier === 'GRANDMASTER') {
          diasfaltando = 14 - diferenca;
        } else if (tier === 'CHALLENGER') {
          diasfaltando = 14 - diferenca;
        } else {
          diasfaltando = 28 - diferenca
        }

        if(diasfaltando > 0 && diasfaltando < 2) {
          mensagem = "Sua conta vai começar a decay em 2 dias.";
        } else if (diasfaltando <= 0) {
          mensagem = "Sua conta já começu a tomar decay.";
        } else {
          mensagem = `Sua conta vai começar a tomar decay em ${diasfaltando} dia(s).`;
        }

        return interaction.editReply({ content: mensagem })
      }
    }
  },
};