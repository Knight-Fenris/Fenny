module.exports = {
    name: 'hello',
    description: "",
    execute(message, args){
        message.channel.send('Hello Friend!');
    }

}