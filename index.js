const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzYyOTIyMDY2ODU2Mzc4NDA4.X3wMiw.ucRtP0qTL7ZV6NKNpTjeocCn6PI';

const prefix = 'f!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

    //console.log(command.name);
}; 

client.once("ready", () =>{
    //console.log('This bot is online!');
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "f!help",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        if(`${args}` === ''){
            commandnames = '';
            for(const file of commandFiles){
                const command = require(`./commands/${file}`);
                client.commands.set(command.name, command);
                commandnames = commandnames + command.name + '\n';
            }; 
            commandnames = commandnames + 'type \"f!help command-name\" for more info';
            message.channel.send(commandnames);

        }else{
            client.commands.get('help').execute(message, args);
        } 
    }
    else if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
    }else if(command == 'dum'){
        client.commands.get('dum').execute(message, args);
    }else if(command == 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if(command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }else if(command == 'fck'){
        client.commands.get('fck').execute(message, args);
    }       
});


client.login(token);


