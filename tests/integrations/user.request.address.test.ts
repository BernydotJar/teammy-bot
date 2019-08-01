import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';
const dialogFlowRecognizer = new DialogFlowRecognizer();

describe('Given a person wants to request the office location', () => {
  describe('When the person say "where is the office?"', () => {
    it('Then the recognizer should return the intent: officeLocation', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('where is the office?');

      expect(dialogFlowResp.intent.displayName).toEqual('officeLocation');

    });
  });

  describe('When the message is "office address"', () => {
    it('Then the recognizer should return the intent: officeLocation', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('office address');
      expect(dialogFlowResp.intent.displayName).toEqual('officeLocation');
    });
  });

  describe('When the message is "office location"', () => {
    it('Then the recognizer should return the intent: officeLocation', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('office location');
      expect(dialogFlowResp.intent.displayName).toEqual('officeLocation');

    });
  });
});
