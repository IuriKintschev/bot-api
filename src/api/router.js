const express = require("express");
const venomController = require("./controllers/VenomController");

const routes = express.Router();

// index
routes.get("/", (req, res) => res.send(req.help));

// venomController
routes.post("/send", venomController.create);
routes.get("/conversas", venomController.store);

module.exports = routes;
