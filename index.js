require('dotenv').config();
const Discord = require('discord.js');

const fetch = require('node-fetch');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);


// get a random fact about penguins from the internet and send it to the channel where the command was called
client.on('message', msg => {
    if (msg.content === '!penguin') {
        fetch('https://penguin-fact.herokuapp.com/')
            .then(res => res.json())
            .then(json => {
                msg.channel.send(json.fact);
            }
        );
    }
}
);