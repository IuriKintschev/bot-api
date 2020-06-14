const venom = require("venom-bot");

const startApi = require("./api/app");
const startBot = require("./whatsapp/bot");

venom.create().then((client) => {
  startBot(client);
  startApi(client);
});
