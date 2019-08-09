export interface ISuggestions {
  saveSuggestion(user: string, message: string): Promise<any>;
}
