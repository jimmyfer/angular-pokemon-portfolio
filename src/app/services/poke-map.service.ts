import { Injectable } from '@angular/core';



import { PokemonMap } from '../interfaces/pokemonmap.interface';

@Injectable({
  providedIn: 'root'
})

export class PokeMapService {

  private _pokeMap: PokemonMap[][] = new Array<null>(30)
  .fill(null)
  .map(() => new Array<null>(20)
      .fill(null)
      .map(() => ({
          map: ['sprite-1'],
          allow: true,
          player: false,
          playerMovementActive: {
            active: false,
            class: 'player-front'
          },
          nextCell: false
      }))
  );

  public _playerPositionX: number = 2;
  public _playerPositionY: number = 9;
  public playerBasePosition: string = "player-front";

  constructor() {

    this.pokeMap[this._playerPositionX][this._playerPositionY].player = true;

    for (let index = 0; index <= 29; index++) {
      this._pokeMap[index][0] = {map: ['sprite-1', 'sprite-2'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][1] = {map: ['sprite-1', 'sprite-3'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
    }
  
    for (let index = 0; index <= 29; index++) {
      this._pokeMap[index][18] = {map: ['sprite-1', 'sprite-2'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][19] = {map: ['sprite-1', 'sprite-3'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[0][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[0][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      index++;
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[1][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[1][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      index++;
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[28][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[28][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      index++;
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[29][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[29][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      index++;
    }
  
    for (let index = 2; index <= 27; index++) {
      this._pokeMap[index][11] = {map: ['sprite-1', 'sprite-4'], allow: true, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][12] = {map: ['sprite-1', 'sprite-4'], allow: true, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][13] = {map: ['sprite-1', 'sprite-4'], allow: true, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][14] = {map: ['sprite-1', 'sprite-4'], allow: true, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][15] = {map: ['sprite-1', 'sprite-4'], allow: true, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][16] = {map: ['sprite-1', 'sprite-4'], allow: true, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
      this._pokeMap[index][17] = {map: ['sprite-1', 'sprite-4'], allow: true, player: false, playerMovementActive: {active: false, class: 'player-front'}, nextCell: false}
    }

   }

  get pokeMap(): any {
    console.log(this._pokeMap);
    return this._pokeMap;
  }
}
