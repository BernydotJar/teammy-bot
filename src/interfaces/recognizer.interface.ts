export interface IRecognizer {
  recognize(user: string, message: string): Promise<any>;
}
