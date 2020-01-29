import sinon from "sinon";

/**
 * A collection of stubbed items used throughout the tests
 */

export default {
    firebaseFunctions: {
      config: sinon.stub().returns({
        dialogflow: { clientid: "FAKE-CLIENT-ID" }
      })
    },
    welcomeHandler: sinon.stub()
  };