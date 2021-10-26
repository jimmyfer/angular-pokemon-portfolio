import { Component } from '@angular/core';

import { PokeMapService } from './services/poke-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pokeMap: any[] = [];

  constructor ( private pokeMapService: PokeMapService) {
    this.pokeMap = pokeMapService.pokeMap;
  }

  move( e: any ) {
    console.log(e);
  }
}