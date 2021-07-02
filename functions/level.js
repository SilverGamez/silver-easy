const Discord = require('discord.js');
const db = require('quick.db');

async function level(message, userID) {
    if (!message) throw new Error(`SilverEasy -> "message" is not defined. View example: https://github.com/SilverGamez/silver-easy#level`);
    if (!userID) userID = message.author.id;
    if (isNaN(userID)) userID = message.author.id;

    var level = db.fetch(`guild_${message.guild.id}_level_${userID}`) || 0;
    var currentxp = db.fetch(`guild_${message.guild.id}_xp_${userID}`) || 0;
    var xpNeeded = level * 500 + 500 // 500 + 1000 + 1500


    const user = message.guild.members.cache.get(userID);

    await message.channel.send(`
${user.user.username}'s Level
    
XP: ${currentxp}/${xpNeeded}
Level: ${level}`);
}

module.exports = level;