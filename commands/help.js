module.exports = {
    name: 'help',
    description: "",
    execute(message, args){
        commandname = `${args}`;
        if(commandname === 'hello' || commandname === 'mute' || commandname === 'unmute'){
            message.channel.send("f!" + `${args}` +  " has no other parameters");
        }
        else if(commandname === 'dum'){
            message.channel.send("f!dum <name> <name2> ......");
        }
        else{
            message.reply("f!" + `${args}` + " doesn't exist");
        }
    }

}