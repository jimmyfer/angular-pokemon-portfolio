import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-battle-console',
  templateUrl: './battle-console.component.html',
  styleUrls: ['./battle-console.component.scss']
})
export class BattleConsoleComponent implements OnInit {

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
  }

  get playerInBattle(): boolean {
    return this.movementService.playerInBattle;
  }

}
