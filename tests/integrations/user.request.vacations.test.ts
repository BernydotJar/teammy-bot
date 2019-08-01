import { DialogFlowRecognizer } from '../../src/recognizers/dialogflow.recognizer';
const dialogFlowRecognizer = new DialogFlowRecognizer();

describe('Given a person wants to request a PTO', () => {
  describe('When the person say "I am really tired"', () => {
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

describe('Given a person wants to request vacations', () => {
  describe('When the person say "I  want a free week"', () => {
    it('Then the recognizer should return the intent: userRequestVacations', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I  want a free week');

      expect(dialogFlowResp.intent.displayName).toEqual('userRequestVacations');

    });
  });

  describe('When the message is "I need vacations"', () => {
    it('Then the recognizer should return the intent: userRequestVacations', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I need vacations');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestVacations');
    });
  });

  describe('When the message is "Vacations"', () => {
    it('Then the recognizer should return the intent: userRequestVacations', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('Vacations');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestVacations');

    });
  });
});

describe('Given a person wants to request a sick day', () => {
  describe('When the person say "i am very sick"', () => {
    it('Then the recognizer should return the intent: userRequestSickDay', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('i am very sick');

      expect(dialogFlowResp.intent.displayName).toEqual('userRequestSickDay');

    });
  });

  describe('When the message is "i have a cold"', () => {
    it('Then the recognizer should return the intent: userRequestVacations', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('i have a cold');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestSickDay');
    });
  });

  describe('When the message is "I feel bad"', () => {
    it('Then the recognizer should return the intent: userRequestVacations', async () => {
      const dialogFlowResp =  await dialogFlowRecognizer.recognize('I feel bad');
      expect(dialogFlowResp.intent.displayName).toEqual('userRequestSickDay');

    });
  });
});
