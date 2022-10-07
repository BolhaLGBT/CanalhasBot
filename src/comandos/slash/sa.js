const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sa')
		.setDescription('Informações sobre a ranqueada do SA!'),
		async execute(interaction) {
		return interaction.reply(`
**SOBRE A RANQUEADA NO SERVIDOR SA**
Atualmente o **ELO** mínimo para você consegui achar fila no servidor **SA** é **GOLD+** <:Gold:818123630339948576>
Caso você seja **GOLD+** <:Gold:818123630339948576> a fila do servidor **SA** começa a ter ás **16:00 (Horário de Brasília)** 

Quando for entrar na fila entre na ** thread** <#918584286930677790> e digite: **.entrar** para entrar na fila e assim sabermos quantas pessoas estão dando fila ranqueada no servidor **SA**.
Caso queira ver se já está rolando fila, entre no canal <#918584286930677790> e digite: **!rankedpops** 
para ver se está tendo fila.

Caso o seu **ELO** seja menor que **Prata** <:Silver2:840491920454713365>
Aconselhamos que você jogue ranqueada no servidor **NA** até alcançar o elo **GOLD+** <:Gold:818123630339948576>  
A ranqueada no servidor **NA** começa ter ás **21:00 (Horário de Brasília)**
Caso queira saber se está tendo fila no **NA**, digite: **!rankedpops na**
`);
	},
};



