export interface ISuggestions {
  saveSuggestions (user: string, message: string): Promise<any>;
}
