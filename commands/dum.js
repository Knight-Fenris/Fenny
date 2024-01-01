module.exports = {
    name: 'dum',
    description: "",
    execute(message, args){
        if(`${args}` === '') {
            message.reply('Mention someone u DUM DUM');
            return;
        }
        dum = `${args} DUM DUM`;
        message.channel.send(dum);
    }
}