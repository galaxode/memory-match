import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { GameboardService } from '../gameboard/gameboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  displayPlayAgain = false;
  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
    this.gameboardService.gameWon.subscribe(
      () => {
        this.displayPlayAgain = true;
      }
    );
  }

  resetGame() {
    this.gameboardService.resetGame();
  }

  onPlayAgain() {
    this.displayPlayAgain = false;
    this.gameboardService.playAgain();
  }

}
