const express = require("express");
const routes = require("./router");
const { PORT } = require("../../env.json");
var cors = require('cors')


module.exports = function startAPI(client) {
  // API Server
  const HELP = `Send messege 😄.
    routes =>
    
    POST/send
    {
        "phone": "556696282866",
        "body": "Hello World"
    }

    POST/conversas
    no body
  `;

  const app = express();
  const port = PORT;

  /**
   * Midllewares
   */
  app.use(express.json()); // json parser

  var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
  }
  app.use(cors()) //Essa linha aqui
  app.use(cors(corsOptions))

  app.use(
    "/v1",
    (req, _, next) => {
      req.client = client;
      req.help = HELP;
      next();
    },
    routes
  ); // routes

  app.listen(port, () =>
    console.log(`${HELP}\n 🔥 Server listening at http://localhost:${port}\n`)
  );
};
