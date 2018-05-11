const feathers = require("@feathersjs/feathers");
const rest = require("@feathersjs/rest-client");

const app = feathers();

// Connect to a different URL
const restClient = rest("http://feathers-api.com");

// Configure an AJAX library (see below) with that client
app.configure(restClient.fetch(window.fetch));

// Connect to the `http://feathers-api.com/messages` service
const messages = app.service("messages");
