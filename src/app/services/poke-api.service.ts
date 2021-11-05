import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeData } from '../interfaces/pokemonData.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  _pokeData: any;
  randomPokemon: any;

  constructor(private http: HttpClient) {
  }

  getRandomPokemon(): Observable<PokeData> {
    const randomNumber = Math.floor(Math.random() * 151) + 1;
    return this.http.get<PokeData>(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
  }

  getPokemonById( pokemon: number): Observable<PokeData> {
    return this.http.get<PokeData>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  }

}