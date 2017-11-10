import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { TileComponent } from './gameboard/tile/tile.component';
import { GameboardService } from './gameboard/gameboard.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    TileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
