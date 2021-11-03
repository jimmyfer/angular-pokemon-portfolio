import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-in-battle',
  templateUrl: './in-battle.component.html',
  styleUrls: ['./in-battle.component.scss']
})
export class InBattleComponent implements OnInit {
  constructor( private movementService: MovementService) {
  }

  ngOnInit(): void {
  }

  get playerInBattle(): boolean {
    return this.movementService.playerInBattle;
  }

}
