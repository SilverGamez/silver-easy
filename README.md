
# Silver-Easy

Silver-easy is a npm package made by SilverGamez_3 (SilverGamez#6333) that mades discord.js easier.

## Installation

You must have [Node.js](https://nodejs.org/en/) installed.

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

SilverEasy.buttonMenu(message, userid, embedArray, emojiArray);
```

### .reactionMenu()

```js
const SilverEasy = require('silver-easy');
const Discord = require('discord.js');

const embed1 = new Discord.MessageEmbed().setTitle('Page one');
const embed2 = new Discord.MessageEmbed().setTitle('Page two');

const embedArray = [embed1, embed2];
const emojiArray = ['◀️', '▶️']; //this is the default but you can change it

SilverEasy.reactionMenu(message, embedArray, emojiArray);
```

### .rps()

```js
const silverEasy = require('silver-easy');

```
