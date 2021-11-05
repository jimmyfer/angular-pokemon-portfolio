import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { InBattleComponent } from "./in-battle/in-battle.component";
import { GameWindowComponent } from "./game-window/game-window.component";


@NgModule({
    declarations: [
        GameWindowComponent,
        InBattleComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GameWindowComponent
    ]
})

export class GameModule {}