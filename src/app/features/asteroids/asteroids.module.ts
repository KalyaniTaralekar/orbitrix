import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsteroidsRoutingModule } from './asteroids-routing.module';
import { AsteroidsComponent } from './components/asteroids/asteroids.component';
import { MatTableModule } from '@angular/material/table';
import { AsteroidsTableComponent } from './components/asteroids-table/asteroids-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AsteroidsComponent,
    AsteroidsTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    AsteroidsRoutingModule,
    MatSortModule
  ]
})
export class AsteroidsModule { }
