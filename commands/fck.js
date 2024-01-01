module.exports = {
    name: 'fck',
    description: "",
    execute(message, args){
        if(!message.member.hasPermission("SEND_MESSAGES")) { //ADMINISTRATOR
          message.reply("U don't have the perms, Cunt");
          return;
        }
        else{
            if(`${args}` === ''){
                message.reply("Mention someone, Idiota");
                return;
            }
            else{
                fck = `Fuck u ${args}`;
                message.channel.send(fck);
            }
        }
    }
}