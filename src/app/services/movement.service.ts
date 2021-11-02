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
  private playerMoving: boolean = false;

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
      if (this.pokeMap[this.playerPositionX + 1][this.playerPositionY].allow == true && !this.playerMoving) {
        this.playerMoving = true;
        this.pokeMap[this.playerPositionX + 1][this.playerPositionY].nextCell = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-right-active';
        setTimeout(() => {
          this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-right-active-two';
          setTimeout(() => {
            this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-right-active-thre';
            setTimeout(() => {
              this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = false;
              this.playerPositionX++;
              this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
              this.pokeMap[this.playerPositionX][this.playerPositionY].nextCell = false;
              this.playerMoving = false;
            }, 60);
          }, 60);
         }, 60);
      }
    }
    if (key === 'ArrowLeft') {
      if (!(this.pokeMapService.playerBasePosition === 'player-left')) {
        this.pokeMapService.playerBasePosition = 'player-left';
        return
      }
      if (this.pokeMap[this.playerPositionX - 1][this.playerPositionY].allow == true && !this.playerMoving) {
        this.playerMoving = true;
        this.pokeMap[this.playerPositionX - 1][this.playerPositionY].nextCell = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-left-active';
        setTimeout(() => {
          this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-left-active-two';
          setTimeout(() => {
            this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-left-active-thre';
            setTimeout(() => {
              this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = false;
              this.playerPositionX--;
              this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
              this.pokeMap[this.playerPositionX][this.playerPositionY].nextCell = false
              this.playerMoving = false;
            }, 60);
          }, 60);
         }, 60);
      }
    }

    if (key === 'ArrowUp') {
      if (!(this.pokeMapService.playerBasePosition === 'player-up')) {
        this.pokeMapService.playerBasePosition = 'player-up';
        return
      }
      if (this.pokeMap[this.playerPositionX][this.playerPositionY - 1].allow == true && !this.playerMoving) {
        this.playerMoving = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY - 1].nextCell = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-up-active';
        setTimeout(() => {
          this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-up-active-two';
          setTimeout(() => {
            this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-up-active-thre';
            setTimeout(() => {
              this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = false;
              this.playerPositionY--;
              this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
              this.pokeMap[this.playerPositionX][this.playerPositionY].nextCell = false;
              this.playerMoving = false;
            }, 60);
          }, 60);
         }, 60);
      }
    }

    if (key === 'ArrowDown') {
      if (!(this.pokeMapService.playerBasePosition === 'player-front')) {
        this.pokeMapService.playerBasePosition = 'player-front';
        return
      }
      if (this.pokeMap[this.playerPositionX][this.playerPositionY + 1].allow == true && !this.playerMoving) {
        this.playerMoving = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY + 1].nextCell = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].player = false;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = true;
        this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-front-active';
        setTimeout(() => {
          this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-front-active-two';
          setTimeout(() => {
            this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.class = 'player-front-active-thre';
            setTimeout(() => {
              this.pokeMap[this.playerPositionX][this.playerPositionY].playerMovementActive.active = false;
              this.playerPositionY++;
              this.pokeMap[this.playerPositionX][this.playerPositionY].player = true;
              this.pokeMap[this.playerPositionX][this.playerPositionY].nextCell = false;
              this.playerMoving = false;
            }, 60);
          }, 60);
         }, 60);
      }
    }
  }
}
