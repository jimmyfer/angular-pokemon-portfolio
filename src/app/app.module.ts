import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleService } from './services/battle.service';
import { MovementService } from './services/movement.service';
import { PokeMapService } from './services/poke-map.service';
import { GameModule } from './game/game.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth.service';
import { PokeApiService } from './services/poke-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GameModule,
    AuthModule
  ],
  providers: [
    MovementService,
    BattleService,
    PokeMapService,
    AuthService,
    PokeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
