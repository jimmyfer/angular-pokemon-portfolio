import { Component } from '@angular/core';

import { PokemonMap } from './interfaces/pokemonmap.interface';

import { BattleService } from './services/battle.service';
import { MovementService } from './services/movement.service';
import { PokeMapService } from './services/poke-map.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  pokeMap: PokemonMap[][] = [];
  playerBasePosition: string;

  constructor ( private pokeMapService: PokeMapService, private movementService: MovementService, private battleService: BattleService) {
    this.pokeMap = pokeMapService.pokeMap;
    this.playerBasePosition = pokeMapService.playerBasePosition;
  }

  keyboardEvents( e: any ) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      this.movementService.updatePlayerPosition(e.key);
      this.updatePlayerBasePosition();
    }
  }

  updatePlayerBasePosition(): void {
    this.playerBasePosition = this.pokeMapService.playerBasePosition;
  }
}