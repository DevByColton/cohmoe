import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ElonMuskSimulatorComponent} from '../articles/elon-musk-simulator/elon-musk-simulator.component';
import {MaestroComponent} from '../articles/maestro/maestro.component';
import {StarKeeperComponent} from '../articles/star-keeper/star-keeper.component';
import {ShapeWarsComponent} from '../articles/shape-wars/shape-wars.component';

@Component({
  selector: 'app-game-dev-experience',
  imports: [
    ElonMuskSimulatorComponent,
    MaestroComponent,
    StarKeeperComponent,
    ShapeWarsComponent
  ],
  templateUrl: './game-dev-experience.component.html',
  styleUrl: './game-dev-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDevExperienceComponent {

}
