exports.run = (client, message, args) =>
{
  if (!args[0])
  {
    message.channels.cache.get('CHANNEL ID').send("There's nothing to say.");
  }
  else
  {
    let text = args.join(" ");
    message.channel.send(text);
  }
}