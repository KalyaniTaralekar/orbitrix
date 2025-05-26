import { Component, Input } from '@angular/core';
import { LaunchInfo } from '../../models/launch.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() launchInfo?: LaunchInfo;
}
