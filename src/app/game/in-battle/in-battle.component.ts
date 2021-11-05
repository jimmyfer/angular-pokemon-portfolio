import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { BattleService } from 'src/app/services/battle.service';
import { MovementService } from 'src/app/services/movement.service';
import { PlayerPokemonsService } from 'src/app/services/player-pokemons.service';

@Component({
  selector: 'app-in-battle',
  templateUrl: './in-battle.component.html',
  styleUrls: ['./in-battle.component.scss']
})
export class InBattleComponent implements OnInit {

  constructor( private movementService: MovementService, private battleService: BattleService, private playerPokemonsService: PlayerPokemonsService) {}

  ngOnInit(): void {
  }

  get playerInBattle(): boolean {
    return this.battleService.playerInBattle;
  }

  get enemyPokemon(): Pokemon {
    return this.battleService.enemyPokemon;
  }

  get playerPokemon(): Pokemon {
    return this.playerPokemonsService.playerPokemons;
  }

  get playerTurn() {
    return this.battleService.playerTurn;
  }

  get enemyHP() {
    return this.battleService.enemyHP;
  }

  get playerHP() {
    return this.battleService.playerHP;
  }

}
