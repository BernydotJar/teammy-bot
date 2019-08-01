import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';
const dialogFlowRecognizer = new DialogFlowRecognizer();

describe('Given a person wants to request educational support information', () => {
  describe('When the person say "I want to go to a conference"', () => {
    it('Then the recognizer should return the intent: educationalSupport', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I want to go to a conference');

      expect(dialogFlowResp.intent.displayName).toEqual('educationalSupport');

    });
  });

  describe('When the message is "certification"', () => {
    it('Then the recognizer should return the intent: educationalSupport', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('certification');
      expect(dialogFlowResp.intent.displayName).toEqual('educationalSupport');
    });
  });

  describe('When the message is "I want to do a course"', () => {
    it('Then the recognizer should return the intent: educationalSupport', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I want to do a course');
      expect(dialogFlowResp.intent.displayName).toEqual('educationalSupport');

    });
  });

});
