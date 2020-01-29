/**
 * The Dialogflow app is what is passed to the https.onrequest() Firebase Function
 * It has the responsibility of
 * - setting up the Dialogflow app
 * - accepting incoming requests (intents) from Dialogflow
 * - routing those intents to intent handlers
 */

import { dialogflow, SignIn } from "actions-on-google";
import functions = require("firebase-functions");

const app = dialogflow({
  clientId: functions.config().dialogflow.clientid
});

app.intent("Default Welcome Intent", require("./intent-handlers/welcome"));

export default app;

