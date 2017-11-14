import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as _ from "lodash";

import { Tile } from './tile.model';

@Injectable()
export class GameboardService {
  // private tiles: Tile[] = [
  //   new Tile({

  //   })
  // ]
  private tileNames = [
  'Telephone',
  'Company',
  'Home',
  'Cabinet',
  'Money',
  'Delivery',
  'Calculator',
  'Time'
  ];
  private shuffledTileNames: string[];
  private identiconName = 'galaxode';
  private identiconBasePath = 'https://github.com/identicons/';
  // Identicon path example: 'https://github.com/identicons/galaxode.png'
  private identiconFullPath = this.identiconBasePath + this.identiconName + '.png';

  themeChanged = new Subject<string>();
  matchNotFound = new Subject<any>();
  matchFound = new Subject<string>();
  reset = new Subject<any>();
  gameWon = new Subject<any>();

  gamesWon = 0;
  matchesToWin = this.tileNames.length;
  matches = 0;
  tilesInPlay = 0;
  tile1: string;
  tile2: string;

  constructor() { }

  setTiles() {
    this.shuffledTileNames = _.shuffle(this.tileNames.concat(this.tileNames));
    console.log(this.shuffledTileNames);
  }

  getTiles() {
    this.setTiles();
    return this.shuffledTileNames;
  }

  resetGame() {
    this.matches = 0;
    this.tilesInPlay = 0;
    this.reset.next();
  }

  playAgain() {
    this.matches = 0;
    this.reset.next();
  }

  getTheme() {
    return this.identiconFullPath;
  }

  setTheme(name: string) {
    this.identiconName = name;
    this.identiconFullPath = this.identiconBasePath + this.identiconName + '.png';
    this.themeChanged.next(this.identiconFullPath);
  }

  setFirstTile(name: string) {
    this.tilesInPlay++;
    this.tile1 = name;
  }

  compareTiles(name: string) {
    if (name === this.tile1) {
      this.matches++;
      this.tilesInPlay = 0;
      if (this.matches === this.matchesToWin) {
        this.gamesWon++;
        this.gameWon.next();
      }
      this.continueAfterMatch();
      return true;
    } else {
      this.tile2 = name;
      this.resetUnmatchedTiles();
      return false;
    }
  }

  resetUnmatchedTiles() {
    this.tilesInPlay = 0;
    this.matchNotFound.next({tile1: this.tile1, tile2: this.tile2});
  }

  continueAfterMatch() {
    this.matchFound.next(this.tile1);
  }



}
