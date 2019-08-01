import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';
const dialogFlowRecognizer = new DialogFlowRecognizer();

describe('Given a person wants to request GYM information', () => {
  describe('When the person say "I want to do sports"', () => {
    it('Then the recognizer should return the intent: gymAffiliation', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I want to do sports');

      expect(dialogFlowResp.intent.displayName).toEqual('gymAffiliation');

    });
  });

  describe('When the message is "I want to exercise"', () => {
    it('Then the recognizer should return the intent: gymAffiliation', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I want to exercise');
      expect(dialogFlowResp.intent.displayName).toEqual('gymAffiliation');
    });
  });

  describe('When the message is "GYM"', () => {
    it('Then the recognizer should return the intent: gymAffiliation', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('GYM');
      expect(dialogFlowResp.intent.displayName).toEqual('gymAffiliation');

    });
  });
});

