import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';

describe('Given a person wants to request PTO', () => {
  const dialogFlowRecognizer = new DialogFlowRecognizer();

  describe('When this person say "I am really tired"', () => {
    it('Then the recognizer should return the intent: userRequestPTO', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I am really tired');

      expect(dialogFlowResp.intent.displayName).toEqual('userRequestPTO');

    });
  });

  describe('When the message is "I wanna PTO"', () => {
    it('Then the recognizer should return the intent: userRequestPTO', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I wanna PTO');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestPTO');
    });
  });

  describe('When the message is "PTO"', () => {
    it('Then the recognizer should return the intent: userRequestPTO', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('PTO');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestPTO');

    });
  });
});
