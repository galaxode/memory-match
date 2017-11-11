import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

import { GameboardService } from './gameboard.service';
import { Tile } from './tile.model';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameboardComponent implements OnInit {
  tiles: Tile[];

  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
    this.tiles = this.gameboardService.getTiles();
    this.gameboardService.reset.subscribe(
      () => {
        this.tiles = this.gameboardService.getTiles()
      }
    );
  }

}
