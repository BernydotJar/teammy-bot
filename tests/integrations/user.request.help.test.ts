import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';
const dialogFlowRecognizer = new DialogFlowRecognizer();

describe('Given a person wants to request help', () => {
  describe('When the person say "I need help"', () => {
    it('Then the recognizer should return the intent: userRequestHelp', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I need help');

      expect(dialogFlowResp.intent.displayName).toEqual('userRequestHelp');

    });
  });

  describe('When the message is "can you assist me?"', () => {
    it('Then the recognizer should return the intent: userRequestHelp', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('can you assist me');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestHelp');
    });
  });

  describe('When the message is "help"', () => {
    it('Then the recognizer should return the intent: userRequestHelp', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('help');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestHelp');

    });
  });
});
