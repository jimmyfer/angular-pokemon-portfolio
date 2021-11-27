import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeData } from '../interfaces/pokemonData.interface';
import { PlayerPokemonsService } from './player-pokemons.service';
import { PokeApiService } from './poke-api.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  enemyPokemon: Pokemon = {
    name: '',
    front_sprite: '',
    back_sprite: '',
    hp: 0,
    speed: 0,
    moves: {
      One: {name: '', damage: 0},
      Two: {name: '', damage: 0},
      Thre: {name: '', damage: 0},
      Four: {name: '', damage: 0}
    }
  };
  private enemyHpBase: number = 0;
  private playerHpBase: number = 0;
  private _playerPokemon: any;
  private _playerInBattle: boolean = false;
  private playerFirstOrNot: boolean = false;
  private _playerTurn: boolean = false;
  private _battleLogMessage: string = 'What will you decide to do?';

  constructor(private pokeApiService: PokeApiService, private playerPokemonsService: PlayerPokemonsService) {
    setTimeout(() => {
      this._playerPokemon = this.playerPokemon;
      this.playerHpBase = this.playerPokemon.hp
    }, 2000)
  }

  generateBattle(n: number): void {

    if (!!n && Math.random() <= n) {
      this.startBattle();
    }
  }

  startBattle() {
    this._playerInBattle = true;
    this.pokeApiService.getRandomPokemon().subscribe(resp => {
      this.enemyPokemon = {
        name: resp.name,
        front_sprite: resp.sprites.versions?.['generation-iv']['diamond-pearl'].front_default!,
        back_sprite: resp.sprites.versions?.['generation-iv']['diamond-pearl'].back_default!,
        hp: 150,
        speed: 80,
        moves: {
          One: {
            name: resp.moves[0].move.name,
            damage: 20
          },
          Two: {
            name: resp.moves[1].move.name,
            damage: 20
          },
          Thre: {
            name: resp.moves[2].move.name,
            damage: 20
          },
          Four: {
            name: resp.moves[3].move.name,
            damage: 20
          }
        }
      }

      this.enemyHpBase = this.enemyPokemon.hp;
    })
    if (this.playerPokemon.speed >= this.enemyPokemon.speed) {
      this.playerFirstOrNot = true;
      this._playerTurn = true;
    }else{
      this.playerFirstOrNot = false;
      this._playerTurn = false;
    }
    // setTimeout(() => {
    //   this._playerInBattle = false;
    // }, 5000)
  }

  playerAttack(moveDamage: number, moveName: string, pokemonName: string): void {
    this._battleLogMessage = ` ${pokemonName} attack with ${moveName}`;
    if (this.enemyPokemon.hp < moveDamage) {
      this.enemyPokemon.hp = 0;
      setTimeout(() => {
        this._playerInBattle = false;
      }, 2000)
    }else{
      this.enemyPokemon.hp = this.enemyPokemon.hp - moveDamage;
    }
    this._playerTurn = false;
    setTimeout(() => {
      this.enemyTurn();
    }, 1500)
  }

  enemyAttack(moveDamage: number, moveName: string, pokemonName: string): void {
    this._battleLogMessage = ` ${pokemonName} attack with ${moveName}`;
    if (this.playerPokemon.hp <= moveDamage) {
      this.playerPokemon.hp = 0;
      setTimeout(() => {
        this._playerInBattle = false;
      }, 2000)
    }else{
      this.playerPokemon.hp = this.playerPokemon.hp - moveDamage;
    }
  }

  enemyTurn(): void {
    this.enemyAttack(this.enemyPokemon.moves.One.damage, this.enemyPokemon.moves.One.name, this.enemyPokemon.name);
  }

  get enemyHP(): number {
    return (this.enemyPokemon.hp / this.enemyHpBase ) * 100;
  }

  get playerHP(): number {
    return (this.playerPokemon.hp / this.playerHpBase ) * 100;
  }

  get playerTurn() {
    return this._playerTurn;
  }
  
  get playerInBattle() {
    return this._playerInBattle;
  }

  get playerPokemon(): Pokemon {
    return this.playerPokemonsService.playerPokemons;
  }

  get battleLogMessage(): string {
    return this._battleLogMessage;
  }


}