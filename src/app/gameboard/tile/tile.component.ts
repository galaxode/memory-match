import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { GameboardService } from '../gameboard.service';
import { Tile } from '../tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TileComponent implements OnInit {
  themePath: string;
  imagePath: string;
  // tile: Tile;
  @Input() name: string;
  disableClick = false;

  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
    this.themePath = this.gameboardService.getTheme();
    this.imagePath = this.themePath;
    this.gameboardService.themeChanged.subscribe(
      (path: string) => {
        this.themePath = path;
        this.imagePath = this.themePath;
      }
    );
    this.gameboardService.matchNotFound.subscribe(
      (tiles: {tile1: string, tile2: string}) => {
        this.disableClick = true;
        setTimeout(
          () => {
            if (this.name === tiles.tile1 || this.name === tiles.tile2) {
              this.imagePath = this.themePath;
            }
            this.disableClick = false;
          }, 500
        );
      }
    )
    this.gameboardService.matchFound.subscribe(
      (name: string) => {
        if (this.name !== name) {
          this.disableClick = false;
        }
      }
    )
    this.gameboardService.reset.subscribe(
      () => {
        this.imagePath = this.themePath;
        this.disableClick = false;
      }
    )
  }

  onClick() {
    const tilesInPlay = this.gameboardService.tilesInPlay;
    if (tilesInPlay === 0) {
      this.disableClick = true;
      this.imagePath = '../../assets/' + this.name + '.png';
      this.gameboardService.setFirstTile(this.name);
    }
    if (tilesInPlay === 1) {
      this.disableClick = true;
      this.imagePath = '../../assets/' + this.name + '.png';
      this.gameboardService.compareTiles(this.name);
    }

  }

  getClickable() {
    if (this.disableClick) {
      return 'none';
    } else {
      return 'all';
    }
  }

}
