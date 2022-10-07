const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('winter4')
		.setDescription('Winter betando.'),
	async execute(interaction) {
		return interaction.reply(`
Eu só gostaria de esclarecer algo sobre as acusações feitas sobre mim por alguns dos membros femininos deste servidor. As acusações a respeito do meu assim chamado "comportamento" são falsas e extremamente dolorosas.

Para os acusadores (você sabe quem você é), alguns pontos para sua consideração: pensar

1) Sim, eu estava pedindo fotos dos pés em DMs, devo admitir isso. Aparentemente, isso pode parecer impróprio para alguns. Então, eu relutantemente me desculpo por isso.

2) As fotos dos pés que eu estava tentando acumular deste servidor eram estritamente para fins artísticos e NÃO SEXUAIS por natureza. Já ouviu falar de um fetichista não sexual por pés? Bem, desculpe quebrá-lo.

3) Eu quase NUNCA tirei screenshots dos pés que foram enviados para mim e / ou enviei essas fotos para outras pessoas

4) Não, não tenho feito ameaças àqueles que optam por ignorar minhas mensagens e pedidos de amizade. Dizer a alguém que claramente me ofendeu que haverá consequências para suas ações não é uma "ameaça". Eu considero isso mais uma ... lição de vida em si. Aprenda a diferença e depois informe-me. Estarei bem aqui esperando um pedido de desculpas.

5) E por fim, como você pode ver, não marquei nenhuma das mulheres que me ofenderam nesta mensagem, pois isso não estaria de acordo com a minha ética, mas sempre respeitarei a decisão de ter as suas próprias " opinião ", não importa o quão equivocada possa ser. Como você pode ver, meus interesses estão principalmente nas artes eruditas e posso garantir a você que se e quando você decidir renunciar ao seu trono e aceitar meus humildes pedidos de amizade (fotos ou não), pelo menos você vai acabar tendo um amigo muito compatível e experiente.

Espero que isso esclareça algumas coisas com os membros mais descontentes do servidor.`);
	},
};