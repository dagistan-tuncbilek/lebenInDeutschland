import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BundeslandNameService {
  getBundeslandName(bundeslandID: string | null): string {
    switch (bundeslandID) {
      case '1':
        return 'Baden-Württemberg';
      case '2':
        return 'Bayern';
      case '3':
        return 'Berlin';
      case '4':
        return 'Brandenburg';
      case '5':
        return 'Bremen';
      case '6':
        return 'Hamburg';
      case '7':
        return 'Hessen';
      case '8':
        return ' Mecklenburg-Vorpommern';
      case '9':
        return 'Niedersachsen';
      case '10':
        return 'Nordrhein-Westfalen';
      case '11':
        return 'Rheinland-Pfalz';
      case '12':
        return 'Saarland';
      case '13':
        return 'Sachsen';
      case '14':
        return 'Sachsen-Anhalt';
      case '15':
        return 'Schleswig-Holstein';
      case '16':
        return 'Thüringen';
      default:
        return 'Ungültige Bundesland ID';
    }
  }
}
