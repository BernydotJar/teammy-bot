import { ResourceResponse, TurnContext } from 'botbuilder';
import { SuggestionsRepository } from '../repository/suggestions.repository';

export class SuggestionController {
  private suggestionsRepository: SuggestionsRepository;
  constructor() {
    this.suggestionsRepository  = new SuggestionsRepository();
  }

  public async saveSuggestion(context: TurnContext , resp: any): Promise<ResourceResponse> {
    if (resp.allRequiredParamsPresent) {
      this.suggestionsRepository.saveSuggestion(context.activity.from.name , resp.parameters.fields.suggestion.stringValue);
      return context.sendActivity('Thanks!!');
    }
    return  context.sendActivity(resp.fulfillmentText);
  }
}
