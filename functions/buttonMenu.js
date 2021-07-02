async function buttonMenu(message, userid, embedArray, emojiArray) {
    if (!message) throw new Error(`SilverEasy -> "message" is not defined. View example: https://github.com/SilverGamez/silver-easy#buttonmenu`);
    if (!userid) throw new Error(`SilverEasy -> "userid" is not defined. View example: https://github.com/SilverGamez/silver-easy#buttonmenu`);
    if (!embedArray) throw new Error(`SilverEasy -> "embedArray" is not defined. View example: https://github.com/SilverGamez/silver-easy#buttonmenu`);

    if (isNaN(userid)) throw new Error('SilverEasy -> "userid" is not a number. You can just do message.author.id, user.id, ect');

    if (!emojiArray) emojiArray = ['◀️ ', '▶️'];

    message.channel.createSlider(userid, embedArray, emojiArray[1], emojiArray[0]);
}

module.exports = buttonMenu