const client = require('../..');

client.on('messageCreate', (message) => {

    if (message.author.bot) return;
    if (message.guild.id === '847353769008037929') {
        if(message.channel.name === 'viadolandia-do-zero') {
            if(message.content === 'zero') {
                message.reply('Gay')
            }
        }
    }
});