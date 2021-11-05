import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeApiService } from './poke-api.service';

@Injectable({
  providedIn: 'root'
})

export class PlayerPokemonsService {
  private _playerPokemon: any;
  constructor(private pokeApiService: PokeApiService) {
    this.pokeApiService.getPokemonById(1).subscribe( resp => {
      this._playerPokemon = {
        name: resp.name,
        front_sprite: resp.sprites.versions?.['generation-iv']['diamond-pearl'].front_default!,
        back_sprite: resp.sprites.versions?.['generation-iv']['diamond-pearl'].back_default!,
        hp: 200,
        speed: 100,
        moves: {
          One: {
            name: resp.moves[0].move.name,
            damage: 40
          },
          Two: {
            name: resp.moves[1].move.name,
            damage: 40
          },
          Thre: {
            name: resp.moves[2].move.name,
            damage: 40
          },
          Four: {
            name: resp.moves[3].move.name,
            damage: 40
          }
        }
      }
    })
  }

  get playerPokemons() {
    return this._playerPokemon;
  }
}