import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { Move } from 'src/app/interfaces/pokemonData.interface';
import { BattleService } from 'src/app/services/battle.service';
import { MovementService } from 'src/app/services/movement.service';
import { PlayerPokemonsService } from 'src/app/services/player-pokemons.service';

@Component({
  selector: 'app-battle-console',
  templateUrl: './battle-console.component.html',
  styleUrls: ['./battle-console.component.scss']
})
export class BattleConsoleComponent implements OnInit {

  mainCommands: boolean = true;
  movesCommands: boolean = false;

  constructor(private battleService: BattleService, private playerPokemonsService: PlayerPokemonsService) {
  }

  ngOnInit(): void {
  }

  toggleMoves() {
    this.mainCommands = false;
    this.movesCommands = true;
  }

  playerAttack(move: {name: string, damage: number }) {
    this.battleService.playerAttack(move.damage, move.name, this.playerPokemon.name);
    this.movesCommands = false;
    this.mainCommands = true;
  }

  get playerInBattle(): boolean {
    return this.battleService.playerInBattle;
  }

  get playerTurn() {
    return this.battleService.playerTurn;
  }

  get playerPokemon(): Pokemon {
    return this.playerPokemonsService.playerPokemons;
  }

  get battleLogMessage(): string {
    return this.battleService.battleLogMessage;
  }

}
