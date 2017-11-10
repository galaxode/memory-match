import { Component, ViewChild, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { GameboardService } from './gameboard.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GameboardComponent implements OnInit {
  @ViewChild('newTheme') newTheme: ElementRef;

  constructor(private gameboardService: GameboardService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.gameboardService.setTheme(this.newTheme.nativeElement.value);
  }

}
