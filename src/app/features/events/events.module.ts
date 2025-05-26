import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import {MatSelectModule} from '@angular/material/select';
import { EventsComponent } from './components/events/events.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  declarations: [EventsComponent, InfoCardComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class EventsModule {}
