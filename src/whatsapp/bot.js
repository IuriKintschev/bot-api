const onMessage = require("./app/messages");

module.exports = function startWhatsapp(client) {
  client.onMessage(async (message) => {
    try {
      onMessage(client, message);
    } catch (e) {
      console.log("bot.js \n", message);
      console.error(e);
    }
  });
};
