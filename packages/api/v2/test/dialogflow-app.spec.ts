import { expect, assert } from "chai";
import proxyquire from "proxyquire";
import stubs from "./stubs";

describe("dialogflow-app", () => {
  // Import dialogflow-app, but stub out some of its imports
  const DialogflowApp = proxyquire("../src/dialogflow-app.ts", {
    "firebase-functions": stubs.firebaseFunctions,
    "./intent-handlers/welcome": stubs.welcomeHandler
  }).default;

  it("initializes a DialogflowApp object", () => {
    expect(DialogflowApp).to.not.be.null;
   // expect(dialogflow).to.be.a("function");
    expect(DialogflowApp.intent).to.be.a("function")
  });

  it("is true", () => {
    assert(true)
  })

  it("passes intents on to their intent handlers", async () => {
    //const response = await dialogflow.default.detectIntent("Hello")
  });
});
