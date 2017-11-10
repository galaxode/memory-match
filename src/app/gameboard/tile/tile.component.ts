import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { GameboardService } from '../gameboard.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TileComponent implements OnInit {
  identiconPath: string;

  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
    this.identiconPath = this.gameboardService.getTheme();
    this.gameboardService.themeChanged.subscribe(
      (path: string) => {
        this.identiconPath = path;
      }
    );
  }

}
