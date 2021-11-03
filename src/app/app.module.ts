import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InBattleComponent } from './battle/in-battle/in-battle.component';
import { BattleService } from './services/battle.service';
import { MovementService } from './services/movement.service';
import { PokeMapService } from './services/poke-map.service';

@NgModule({
  declarations: [
    AppComponent,
    InBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MovementService,
    BattleService,
    PokeMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
