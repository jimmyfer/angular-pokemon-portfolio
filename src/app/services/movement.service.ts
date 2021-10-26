import { Injectable } from '@angular/core';
import { PokeMapService } from './poke-map.service';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(private pokeMapService: PokeMapService) { 
    
  }
}
