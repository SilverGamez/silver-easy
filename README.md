
# Silver-Easy

Silver-easy is a npm package made by SilverGamez_3 (SilverGamez#6333) that mades discord.js easier.

## Installation

You must have [Node.js](https://nodejs.org/en/) installed.

NPM page: https://www.npmjs.com/package/silver-easy

```bash
npm i silver-easy
```

## Import Package

```js
const SilverEasy = require('silver-easy');
```

## Methods:

### .buttonMenu()

```js
const SilverEasy = require('silver-easy');
const Discord = require('discord.js');

const embed1 = new Discord.MessageEmbed().setTitle('Page one');
const embed2 = new Discord.MessageEmbed().setTitle('Page two');

const userid = message.author.id;
const embedArray = [embed1, embed2];
const emojiArray = ['◀️', '▶️']; //this is the default but you can change it

require('discord-buttons')(client);
require('discord-slider')(client);

SilverEasy.buttonMenu(message, userid, embedArray, emojiArray); //this will create the message with buttons.
```
Warning: If you get a error saying "cannot send empty message", its fine. There isnt a way i know to fix it.
#### Preview
![github-small](https://cdn.discordapp.com/attachments/860380499792494632/860380523084120104/buttonmenu.png)

### .chatBot()

```js
const SilverEasy = require('silver-easy');

SilverEasy.chatBot(message, 'CHANNEL ID') //replace 'CHANNEL ID' with the channels id you want your chatbot to be responding in
```
#### Preview
![github-small](https://cdn.discordapp.com/attachments/860380499792494632/860381102140031016/unknown.png)
