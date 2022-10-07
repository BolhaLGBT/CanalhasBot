const client = require('../..');
const axios = require('axios');

//Twitter URL Fix
client.on('messageCreate', (message) => {

    if (message.author.bot) return;
    if (message.guild.id === '847353769008037929') {

    const url = /^\s*https:\/\/([^\s]+\.)?twitter.com\/([^\s?]+)(\?[^\s]*)?\s*$/;
    const match = url.exec(message.content);

    const filter = (reaction, user) => {
        return reaction.emoji.name === '🩹' && user.id === message.author.id;
    };

    const collector = message.createReactionCollector({ filter, time: 60000 });

    if(match)
    message.react('🩹').then(reaction => setTimeout(() => {
        reaction.remove().catch(err => console.log('[Twitter Fix] - Ocorreu um erro ao remover a reação.'))
    }, 60000))

    collector.on('collect', (reaction, user) => {
        if(match) {
            message.delete();
            message.channel.send(`
            enviado por **${message.author.username}** \nhttps://www.fxtwitter.com/${match[2]}`).catch(err => console.log('[Twitter Fix] - Ocorreu um erro ao alterar a URL do Twitter.'))
        } 
    })
    }
});

//Tiktok URL Fix
client.on('messageCreate', async (message) => {

    if (message.author.bot) return;
    if (message.guild.id === "847353769008037929") {

        const url = /^\s*https:\/\/([^\s]+\.)?tiktok.com\/([^\s?]+)(\?[^\s]*)?\s*$/;
        let match = "";

        if(url.exec(message.content)) {
            const fix = await axios.get(message.content).then(response => response.request.res.responseUrl).catch(e => {});
            match = url.exec(fix)[2];
        }

        const filter = (reaction, user) => {
            return reaction.emoji.name === '🩹' && user.id === message.author.id;
        };

        const collector = message.createReactionCollector({ filter, time: 60000 });

    if(match)
        message.react('🩹').then(reaction => setTimeout(() => {
            reaction.remove().catch(err => console.log('[Tiktok Fix] - Ocorreu um erro ao remover a reação.'))
        }, 60000))

        collector.on('collect', (reaction, user) => {
            if(match) {
                message.delete();
                message.channel.send(`
            enviado por **${message.author.username}** \nhttps://www.vxtiktok.com/${match}`).catch(err => console.log('[Tiktok Fix] - Ocorreu um erro ao alterar a URL do Tiktok.'))
            } 
        })
    }
});