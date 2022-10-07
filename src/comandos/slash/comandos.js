const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('comandos')
		.setDescription('Lista com todos os meus comandos.'),
	async execute(interaction) {

const comandos = new MessageEmbed()
	.setColor('#5865F2')
	.setTitle('CANALHAS MIL VEZES!!!')
	.setDescription('Parem de me marcar seus canalhas. \nEmote feito pela: __**[CatWitch](https://www.twitch.tvcatwitchie)**__ | Emote do canal do __**[Mirinha](https://www.twitch.tvmirinhalol)**__ \nConvite do bot **[CLIQUE AQUI!](https://discord.com/api/oauth2/authorize?client_id=876176887364329513&permissions=8&scope=bot%20applications.commands)**')
	.addField('** **', 'Meus comandos: \n**winter**, **queueranked**, **plass**, **plass1**, **mirinha**, **kaiez**, **workezera**, **farmer**, **kass**, **rolezeiro**, **plass2**, **kass1**, **plass3**, **winter1**, **kass2**, **kass3**, **kass4**, **servinhu1**, **home**, **phz3**, **mirinha1**, **inimigodoestado**, **inimigodoestado1**, **undedi**, **koharii**, **winter4**, **avatar**, **circadia**, **tuts12**, **gago**, ', false)
	.addField('** **', 'Personagens:\n **hehe**, **roupinha @user**, **magnus**, **hehe1**, ', false)
	.addField('** **', 'Áudios:\n **zero**, **zero1**, **workzera1**, **servinhu**, **rolezeiro1**, **lord**, **pitas**, **qzarny**, **cat**, **sona**, **plass4**, **winter2**, **wata**, **wata1**, **phz**, **phz1**, **phz2**, **sood**, **zero2**, **winter3**, **tchutchuco**, **tuts**, **tuts1**, **tuts2**, **tuts3**, **tuts4**, **tuts5**, **tuts6**, **tuts7**, **tuts8**, **tuts9**, **zero3**, **mirinha2**, **tuts10**, **ctz**, **coguja**, **tuts11**, **reborn**, **vene**, **vene1**, **cicardia1**, **circadia2**, **circadia3**, **padoru**' , false)
	.addField('** **', 'O seu canalha, se você quiser dá sugestão de comando envie uma **DM** para essa desgraçada -> <@226393792335314945>', false)
	return interaction.reply({ embeds: [comandos] });
  },
};
