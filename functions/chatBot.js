const fetch = require('node-fetch').default;

async function chatBot(message, channelID) {
    if(!message) throw new Error(`SilverEasy -> "message" is not defined. View example: `);
    if(!channelID) throw new Error(`SilverEasy -> "channelID" is not defined. View example: `);

        if(message.channel.id === channelID){
            if(message.author.bot) return;
            fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=DQRJMBYJR1lQtQFEC1mpdXNex`)
            .then(response => response.json())
            .then(data => {
                message.channel.send(data.response);
            });
        };
};

module.exports = chatBot