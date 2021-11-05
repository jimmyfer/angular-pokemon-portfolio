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

  battleLogMessage: string = 'What will you decide to do?';
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
    this.battleService.enemyDamage(move.damage);
    this.movesCommands = false;
    this.mainCommands = true;
    this.battleLogMessage = this.playerPokemon.name + ' attack width ' + move.name;
    setTimeout(() => {
      this.battleLogMessage = 'What will you decide to do?';
    }, 1500)
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

}
