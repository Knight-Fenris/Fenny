module.exports = {
    name: 'mute',
    description: "",
    execute(message, args){
      //if(`${args}` === ''){
        if(!message.member.hasPermission("MUTE_MEMBERS")) {
          message.reply("U don't have the perms... son");
          return;
        }
        if (message.member.voice.channel) {
          let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
          for (const [memberID, member] of channel.members) member.voice.setMute(true);
          message.reply('All da b****es *SILENCED*');
        }else {
          message.reply('You need to join a voice channel first!');
        }
      //}
    }  

}