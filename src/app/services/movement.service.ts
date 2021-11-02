import { Injectable } from '@angular/core';

import { PokemonMap } from '../interfaces/pokemonmap.interface';

import { PokeMapService } from './poke-map.service';




@Injectable({
  providedIn: 'root'
})



export class MovementService {

  pokeMap: PokemonMap[][] = [];
  playerPositionX: number = 0;
  playerPositionY: number = 0;

  constructor(private pokeMapService: PokeMapService) { 
    this.pokeMap = pokeMapService.pokeMap;
    this.playerPositionX = pokeMapService._playerPositionX;
    this.playerPositionY = pokeMapService._playerPositionY;
  }

  updatePlayerPosition(key: string) {
    if (key === 'ArrowRight') {
      if (!(this.pokeMapService.playerBasePosition === 'player-right')) {
        this.pokeMapService.playerBasePosition = 'player-right';
        return
      }
      if (this.pokeMap[this.playerPositionX + 1][this.playerPositionY].allow == true) {
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
        this.playerPositionX++;
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
      }
    }
    if (key === 'ArrowLeft') {
      if (!(this.pokeMapService.playerBasePosition === 'player-left')) {
        this.pokeMapService.playerBasePosition = 'player-left';
        return
      }
      if (this.pokeMap[this.playerPositionX - 1][this.playerPositionY].allow == true) {
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
        this.playerPositionX--;
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
      }
    }

    if (key === 'ArrowUp' && this.pokeMap[this.playerPositionX][this.playerPositionY - 1].allow == true) {
      this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
      this.playerPositionY--;
      this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
    }

    if (key === 'ArrowDown' && this.pokeMap[this.playerPositionX][this.playerPositionY + 1].allow == true) {
      this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
      this.playerPositionY++;
      this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
    }
  }
}
