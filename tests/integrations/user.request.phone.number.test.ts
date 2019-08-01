import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';
const dialogFlowRecognizer = new DialogFlowRecognizer();

describe('Given a person wants to request the office phone number', () => {
  describe('When the person say "can you give me the office phone number?"', () => {
    it('Then the recognizer should return the intent: userRequestPhoneNumber', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('can you give me the office phone number?');

      expect(dialogFlowResp.intent.displayName).toEqual('userRequestPhoneNumber');

    });
  });

  describe('When the message is "whats the number of the office"', () => {
    it('Then the recognizer should return the intent: userRequestPhoneNumber', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('whats the number of the office');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestPhoneNumber');
    });
  });

  describe('When the message is "phone number"', () => {
    it('Then the recognizer should return the intent: userRequestPhoneNumber', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('phone number');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestPhoneNumber');

    });
  });
});
