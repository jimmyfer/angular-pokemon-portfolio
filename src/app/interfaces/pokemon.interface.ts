export interface Pokemon {
    name: string,
    front_sprite: string,
    back_sprite: string,
    hp: number,
    speed: number,
    moves: Moves
}

export interface Moves {
    One: {
        name: string,
        damage: number
    },
    Two: {
        name: string,
        damage: number
    },
    Thre: {
        name: string,
        damage: number
    },
    Four: {
        name: string,
        damage: number
    }
}