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

  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.gameboardService.setTheme(form.value.identiconName);
  }

}
