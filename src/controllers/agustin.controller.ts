import { ResourceResponse, TurnContext } from 'botbuilder';

export class AgustinController {
  // tslint:disable-next-line: no-empty
  constructor() {}

  public getAgustinNickname(context: TurnContext): Promise<ResourceResponse> {
    const nicknames = ['Agaustin', 'Agaystin', 'Agusbeam', 'AgusBitch', 'AgusCUNT', 'AgusDick', 'AgusDIM', 'AgusDrinks', 'AguSniff', 'AguSquirt', 'Agusteam', 'AgusTia', 'Agustin Jesurum', 'Agustino', 'Angustin', 'AnusTin', 'Aporriastin', 'Arbustin', 'Asustin', 'Atropellastin', 'Barestin', 'Cabezastin', 'Cablestin', 'Cachustin', 'Cacorrostin', 'Cagastin', 'Carrangustin', 'ChilisTin', 'Chimbastin', 'Chimbistin', 'ChupAgus Cabezastin', 'Chupastin', 'Conchastin', 'Coñostin', 'Culostin', 'Deepthroatin', 'DickLoverstin', 'DickLovin', 'Disfrutastin', 'Disgusting', 'DobleSIM', 'Dragustin', 'Drogastin', 'Drogustin', 'Embutidostin', 'Enguyestin', 'Entrevistin', 'Escrotostin', 'Espumastin', 'Facebookstin', 'Fagostyn', 'Falostin', 'Felaciostin', 'FlacusDick', 'Flacustin', 'Fogeldick', 'Fogellicon', 'Fufastin', 'Galgostin', 'gargantaprofundastin', 'GargusTin', 'Golosostin', 'Gonadastin', 'Gonorrein', 'Grillastin', 'Guarostin', 'Guelentin', 'Herpestin', 'jasrrastin', 'Jude', 'Judio', 'Kamasutrin', 'Langostino', 'Llorostin', 'Lucastin', 'Mamastin', 'Mangaystin', 'Mangostin', 'Maricustin', 'Masturbin', 'McLovin', 'McMuffin', 'McPuto', 'Mierdastin', 'Mugustin', 'Nalgustin', 'Networkstin', 'Penestin', 'Penetrastin', 'Pericustin', 'Perrastin', 'Picantin', 'Picantustin', 'Pichistin', 'Pipistin', 'Prepagustin', 'Prepuciostin', 'Prostitustin', 'Rasputin', 'Regaystin', 'Semenstin', 'SIDAstin', 'Tangastin', 'Tragastin', 'Transgaystin', 'Travestin', 'Tuffostin', 'Twitterastin', 'Ucraniastin', 'Uretrastin', 'Vagostin', 'VergusTin', 'Vladustin', 'Zarcustin', 'Ticketstin'];
    const nickName = nicknames[Math.floor(Math.random() * nicknames.length)];
    return context.sendActivity(nickName);
  }
}
