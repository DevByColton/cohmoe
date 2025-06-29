import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ElonMuskSimulatorComponent} from '../articles/elon-musk-simulator/elon-musk-simulator.component';
import {MaestroComponent} from '../articles/maestro/maestro.component';
import {StarKeeperComponent} from '../articles/star-keeper/star-keeper.component';

@Component({
  selector: 'app-game-dev-experience',
  imports: [
    ElonMuskSimulatorComponent,
    MaestroComponent,
    StarKeeperComponent
  ],
  templateUrl: './game-dev-experience.component.html',
  styleUrl: './game-dev-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDevExperienceComponent {

}
