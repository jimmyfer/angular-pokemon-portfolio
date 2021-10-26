import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeMapService {

  private _pokeMap: any[] = new Array(30).fill( null, 0).map(() => new Array(20).fill({ map: ['sprite-1'], allow: true}, 0));
  private _playerposition: any[] = [ 2 , 9 ];

  constructor() {

    for (let index = 0; index <= 29; index++) {
      this._pokeMap[index][0] = {map: ['sprite-1', 'sprite-2'], allow: false}
      this._pokeMap[index][1] = {map: ['sprite-1', 'sprite-3'], allow: false}
    }
  
    for (let index = 0; index <= 29; index++) {
      this._pokeMap[index][18] = {map: ['sprite-1', 'sprite-2'], allow: false}
      this._pokeMap[index][19] = {map: ['sprite-1', 'sprite-3'], allow: false}
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[0][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false}
      this._pokeMap[0][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false}
      index++;
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[1][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false}
      this._pokeMap[1][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false}
      index++;
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[28][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false}
      this._pokeMap[28][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false}
      index++;
    }
  
    for (let index = 0; index <= 15; index++) {
      this._pokeMap[29][index + 2] = {map: ['sprite-1', 'sprite-2'], allow: false}
      this._pokeMap[29][index + 3] = {map: ['sprite-1', 'sprite-3'], allow: false}
      index++;
    }
  
    for (let index = 2; index <= 27; index++) {
      this._pokeMap[index][11] = {map: ['sprite-1', 'sprite-4']}
      this._pokeMap[index][12] = {map: ['sprite-1', 'sprite-4']}
      this._pokeMap[index][13] = {map: ['sprite-1', 'sprite-4']}
      this._pokeMap[index][14] = {map: ['sprite-1', 'sprite-4']}
      this._pokeMap[index][15] = {map: ['sprite-1', 'sprite-4']}
      this._pokeMap[index][16] = {map: ['sprite-1', 'sprite-4']}
      this._pokeMap[index][17] = {map: ['sprite-1', 'sprite-4']}
    }

    this._pokeMap[2][9] = {map: ['sprite-1', 'sprite-4', 'player']}

   }

  get pokeMap(): any {
    console.log(this._pokeMap);
    return this._pokeMap;
  }
}
