import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { GameboardService } from '../gameboard/gameboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
  }

  resetGame() {
    this.gameboardService.resetGame();
  }

}
