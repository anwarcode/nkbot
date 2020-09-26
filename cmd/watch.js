exports.run = (client, message, args) =>
  {
    client.user.setActivity("Netflix", {type: 'WATCHING'}).catch(console.error);

    message.channel.send("Activity Changed Successfuly");
    message.delete();
}