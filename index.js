const Discord = require('discord.js');
const fetch = require("node-fetch");
const {
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core');


// Grab token from config.json and create client and login
const client = new Discord.Client();
client.login(token);


// Listeners
client.once('ready', () => {
    console.log('Bot is ready!');
   });
   client.once('reconnecting', () => {
    console.log('Reconnecting!');
   });
   client.once('disconnect', () => {
    console.log('Disconnect!');
   });



// Handle direct messages
client.on("message", function (message) {
    if (message.author.equals(client.user)) return; // Ignores itself
    if (message.channel.type === 'dm') return message.reply("https://media.giphy.com/media/l0K4mbH4lKBhAPFU4/giphy.gif"); // Placeholder response

 
  });

// Handle channel messages

client.on("message", async message => {
    //if messages are in channel 'bill-gates'
    if (message.channel.name == "bill-gates") {
    if (message.author.bot) return;
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
    return message.channel.send(`**:x: Please dont mention anyone**`);
     }
     
    if  (message.content.includes(`!test`)) 
    message.channel.send(`Hello <@${message.author.id}> https://media.giphy.com/media/l0K4mbH4lKBhAPFU4/giphy.gif `); 
    }

    if (message.content.includes(`!help`)) {
        return message.channel.send(`List of commands here....`);
         }

         
    });