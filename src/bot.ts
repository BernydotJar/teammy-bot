// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ActivityHandler } from 'botbuilder';
import { AgustinController, SuggestionController } from './controllers';
import { DialogFlowRecognizer } from './recognizers';

export class MyBot extends ActivityHandler {
  private agustinController: AgustinController;
  private suggestionController: SuggestionController;

  constructor() {
    super();
    this.agustinController = new AgustinController();
    this.suggestionController = new SuggestionController();
    // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
    this.onMessage(async (context, next): Promise <void> => {
      const dialogFlowRecognizer = new DialogFlowRecognizer();
      const resp = await dialogFlowRecognizer.recognize(context.activity.text, context.activity.conversation.id);

      switch (resp.intent.displayName) {
        case 'userRequestAgustinNickname':
          await this.agustinController.getAgustinNickname(context);
          break;
        case 'userRequestSuggestion':
          await this.suggestionController.saveSuggestion(context, resp);
          break;
        default:
          console.log(resp);
          context.sendActivity(resp.fulfillmentText);
          break;
      }
      await next();
    });

    this.onMembersAdded(async (context, next): Promise <void> => {
      const membersAdded = context.activity.membersAdded;
      for (const member of membersAdded) {
        if (member.id !== context.activity.recipient.id) {
          await context.sendActivity('Hello and welcome!');
        }
      }
            // By calling next() you ensure that the next BotHandler is run.
      await next();
    });
  }
}
