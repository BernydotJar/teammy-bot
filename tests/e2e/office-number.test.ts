import { get } from 'config';
import * as superagent from 'superagent';

describe('Given a office phone number', () =>  {
  describe('When the message is office phone', () => {
    it('Then 6040137 should be present in the text', async  () => {
      // Arrange

      const conversationsResponse =  await superagent
      .post('https://directline.botframework.com/v3/directline/conversations')
      .send()
      .set('Authorization', `Bearer  ${get('azure.direct_line_token')}`)
      .accept('application/json');

      const createActivityResponse = await superagent
      .post(`https://directline.botframework.com/v3/directline/conversations/${conversationsResponse.body.conversationId}/activities`)
      .set('Authorization', `Bearer  ${get('azure.direct_line_token')}`)
      // tslint:disable-next-line: object-literal-sort-keys
      .send(
      {type: 'message',
       // tslint:disable-next-line: object-literal-sort-keys
      from: {
        id: 'JUAN'
      },
      text: 'do you know the phone number of the office?'
     })
      .accept('application/json');

      // Act

      const getActivitiesResponse = await superagent
      .get(`https://directline.botframework.com/v3/directline/conversations/${conversationsResponse.body.conversationId}/activities`)
      .set('Authorization', `Bearer  ${get('azure.direct_line_token')}`)
      .accept('application/json');
      // Assert
      expect(getActivitiesResponse.body.activities[getActivitiesResponse.body.activities.length - 1].text).toContain('6040137');
    });
  });
});
