module.exports = {
    name: 'unmute',
    description: "",
    execute(message, args){
      if(!message.member.hasPermission("MUTE_MEMBERS")) {
        message.reply("U don't have the perms... son");
        return;
      }
      if (message.member.voice.channel) {
          let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
          for (const [memberID, member] of channel.members) {
              // I added the following if statement to mute everyone but the invoker:
              // if (member != message.member)
          
              // This single line however, nested inside the for loop, should mute everyone in the channel:
              member.voice.setMute(false);
          }
            message.reply('unmuted');
        }else {
          message.reply('You need to join a voice channel first!');
        }
    }

}