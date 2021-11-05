import { Component, OnInit } from '@angular/core';

import { PokemonMap } from 'src/app/interfaces/pokemonmap.interface';

import { BattleService } from 'src/app/services/battle.service';
import { MovementService } from 'src/app/services/movement.service';
import { PokeMapService } from 'src/app/services/poke-map.service';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.scss']
})
export class GameWindowComponent {

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
