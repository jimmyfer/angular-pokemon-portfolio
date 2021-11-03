import { Injectable } from '@angular/core';
import { MovementService } from './movement.service';
import { PokeMapService } from './poke-map.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  constructor() {  }

  generateBattle(n: number): boolean {
    return !!n && Math.random() <= n;
  }
}
