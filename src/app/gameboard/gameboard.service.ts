import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GameboardService {
  // Identicon path example: 'https://github.com/identicons/galaxode.png'
  private identiconName = 'galaxode';
  private identiconBasePath = 'https://github.com/identicons/';
  private identiconFullPath = this.identiconBasePath + this.identiconName + '.png';
  themeChanged = new Subject<string>();

  constructor() { }

  getTheme() {
    return this.identiconFullPath;
  }

  setTheme(name: string) {
    this.identiconName = name;
    this.identiconFullPath = this.identiconBasePath + this.identiconName + '.png';
    this.themeChanged.next(this.identiconFullPath);
  }

}
