import { get } from 'config';
import { DetectIntentRequest, DetectIntentResponse, QueryResult, SessionsClient } from 'dialogflow';
import { v4 } from 'uuid';

export class DialogFlowRecognizer {

  public async recognize(message: string): Promise<QueryResult> {

    const projectId = 'teamy-bot-scnpuq';
    // A unique identifier for the given session
    const sessionId = v4();
      // Create a new session
    const sessionClient = new SessionsClient();
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

      // The text query request.
    const request: DetectIntentRequest = {
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          languageCode: get('languageCode'),
          text: message,
          // The language used by the client (en-US)
        },
      },
      session: sessionPath,
    };

      // Send request and log result
    const responses: DetectIntentResponse[] = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result: QueryResult = responses[0].queryResult;
    console.log(result);
    return result;
  }
}
