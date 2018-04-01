const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user .setGame("EasterEggs, !help");
    console.log("Le bot a bien été connecté");
});

bot.login("NDI5OTk0Njk2NDc2MTk2ODY1.DaKBng.-SS49qP7VF7F0HkuTDvX0VJd1vg");
