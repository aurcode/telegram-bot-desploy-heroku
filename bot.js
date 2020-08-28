const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

//bot.on('message', (msg) => {
//  const name = msg.from.first_name;
//  bot.sendMessage(msg.chat.id, 'Hello, ' + name + '!').then(() => {
//    // reply sent!
//  });
//});

//bot.on('message', (msg) => {

  //var Hi = "hi";
  //if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
  //bot.sendMessage(msg.chat.id,"Hello dear user");
  //}

  //});

  bot.on('message', (msg) => {

    var hi = "hola";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hola a todos menos a " + msg.from.first_name);
    }

    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Wamos a mimir");
    }

    });

module.exports = bot;
