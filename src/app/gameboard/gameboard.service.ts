import { Injectable } from '@angular/core';

@Injectable()
export class GameboardService {
  // Identicon path example: 'https://github.com/identicons/galaxode.png'
  private identiconName = 'galaxode';
  private identiconBasePath = 'https://github.com/identicons/';

  constructor() { }

  getTheme() {
    return this.identiconBasePath + this.identiconName + '.png';
  }

  setTheme(name: string) {
    this.identiconName = name;
  }

}
