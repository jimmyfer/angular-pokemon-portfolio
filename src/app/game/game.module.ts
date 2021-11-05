import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { InBattleComponent } from "./in-battle/in-battle.component";
import { GameWindowComponent } from "./game-window/game-window.component";
import { BattleConsoleComponent } from './battle-console/battle-console.component';


@NgModule({
    declarations: [
        GameWindowComponent,
        InBattleComponent,
        BattleConsoleComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GameWindowComponent
    ]
})

export class GameModule {}