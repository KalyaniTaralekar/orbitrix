import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LaunchService } from '../../services/launch.service';
import { LaunchInfo } from '../../models/launch.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  eventsFilterForm!: FormGroup;
  launchData: LaunchInfo = {
    count: 0,
    next: null,
    previous: null,
    results: []
  };
  launchType: string = 'upcoming';
  title: string = '';
  timelines = ['Upcoming Launches', 'Previous Launches'];
  constructor(private launchService: LaunchService) {
    this.eventsFilterForm = new FormGroup({
      launch: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.eventsFilterForm.patchValue({
      launch: 'Upcoming Launches',
    });
    this.title = this.eventsFilterForm.get('launch')?.value;
    this.fetchLaunch();
  }
  fetchLaunch() {
    if (this.title === 'Upcoming Launches') {
      this.launchType = 'upcoming';
    } else this.launchType = 'past';
    this.launchService
      .getLaunchInfo(this.launchType)
      .pipe()
      .subscribe((data) => {
        this.launchData = data;
        console.log('DaTaaaaaa',this.launchData);
      });
  }
  onSearch() {
    this.title = this.eventsFilterForm.get('launch')?.value;
  }
}
