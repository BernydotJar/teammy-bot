import { ISuggestions } from '../interfaces/suggestions.interface';
import { Suggestion } from './models/suggestions';

export class SuggestionsRepository implements ISuggestions {
  private tableSuggestion: Suggestion;

  constructor() {
    this.tableSuggestion = new Suggestion();
  }

  public async saveSuggestion(user: string, message: string) {
    return this.tableSuggestion.save(user, message);
  }
}
