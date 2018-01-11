import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GameboardService } from '../gameboard/gameboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  placeholder = 'Enter a GitHub username to change identicons';


  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.gameboardService.setTheme(form.value.identiconName);
    form.reset();
  }

  getMatches() {
    return this.gameboardService.matches;
  }

  getMatchesToWin() {
    return this.gameboardService.matchesToWin;
  }

  getGamesWon() {
    return this.gameboardService.gamesWon;
  }
}
