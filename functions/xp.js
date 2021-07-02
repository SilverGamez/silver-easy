const db = require('quick.db');

async function xp(message, max, min) {
    if(!message) throw new Error(`SilverEasy -> "message" is not defined. View example: https://github.com/SilverGamez/silver-easy#xp`);
    if(!max) throw new Error(`SilverEasy -> "max" is not defined. Please add a max number of xp a user can get`);
    if(!min) throw new Error(`SilverEasy -> "min" is not defined. Please add a min number of xp a user can get`);

    if (message.author.bot) return;

    const randomNumber = Math.floor(Math.random() * min) + max;

    db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
    db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)

    var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1;
    var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`);
    var xpNeeded = level * 500;

    if (xpNeeded < xp) {
        var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
        db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
        message.channel.send(`Congrats ${message.author}, you leveled up, you are now level ${newLevel}`)
    }
}

module.exports = xp;