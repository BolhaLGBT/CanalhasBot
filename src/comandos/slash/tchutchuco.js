const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const voiceDiscord = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('tchutchuco')
    .setDescription('tchutchuco'),
    async execute(interaction, args) {
        const { joinVoiceChannel } = require('@discordjs/voice');

        if(!interaction.member.voice?.channel) return interaction.reply('O seu canalha, primeira entre em um **CANAL DE VOZ** e depois você me chama! Malditos Jogadores de **EVA**')

        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.channel.guild.id,
            adapterCreator: interaction.channel.guild.voiceAdapterCreator,
        });
        
		const player = voiceDiscord.createAudioPlayer();
		const resource = voiceDiscord.createAudioResource('https://cdn.discordapp.com/attachments/878944845396340736/882431355567345694/tchutchuco.mp3');

		player.play(resource);
		connection.subscribe(player);

        await interaction.reply(`O Áudio **\`tchutchuco\`** está tocando no canal **\`${interaction.member.voice.channel.name}\`** \nCaso queira baixar o Áudio **[CLIQUE AQUI!](https://cdn.discordapp.com/attachments/878944845396340736/882431355567345694/tchutchuco.mp3tchutchuco)**`);
		player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});
    },
};