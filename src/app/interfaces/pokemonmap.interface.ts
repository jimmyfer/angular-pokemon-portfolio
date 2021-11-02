export interface PokemonMap {
    map: string[];
    allow: boolean;
    player: boolean;
    playerMovementActive: {
      active: boolean;
      class: string;
    };
    nextCell: boolean;
  }