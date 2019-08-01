import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';
const dialogFlowRecognizer = new DialogFlowRecognizer();

describe('Given a person wants to request english classes information', () => {
  describe('When the person say "I want to enter English lessons"', () => {
    it('Then the recognizer should return the intent: userRequestEnglishClasses', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I want to enter English lessons');

      expect(dialogFlowResp.intent.displayName).toEqual('userRequestEnglishClasses');

    });
  });

  describe('When the message is "How do I enter English classes?"', () => {
    it('Then the recognizer should return the intent: userRequestEnglishClasses', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('How do I enter English classes?');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestEnglishClasses');
    });
  });

  describe('When the message is "english lessons"', () => {
    it('Then the recognizer should return the intent: userRequestEnglishClasses', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('english lessons');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestEnglishClasses');

    });
  });
});
