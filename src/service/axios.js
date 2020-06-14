const axios = require("axios").default;

const api = axios.create({
  baseURL: "http://enterprise.escalepro.com.br/wp-json/wp/v2",
});

module.exports = api;
