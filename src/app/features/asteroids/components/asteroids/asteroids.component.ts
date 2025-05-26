import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AsteroidsService } from '../../services/asteroids.service';
import { AsteroidFeed } from '../../models/asteroids.model';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss'],
})
export class AsteroidsComponent implements OnInit {
  asteroidFilterForm: FormGroup;
  asteroidFeed!: AsteroidFeed;
  constructor(
    private fb: FormBuilder,
    private asteroidService: AsteroidsService
  ) {
    this.asteroidFilterForm = new FormGroup({
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() - 7);
    const formattedToday = today.toISOString().slice(0, 10);
    const formattedOneWeekAgo = endDate.toISOString().slice(0, 10);

    this.asteroidFilterForm.patchValue({
      startDate: formattedOneWeekAgo,
      endDate: formattedToday,
    });
    this.asteroidService
      .getAsteroidData(formattedOneWeekAgo, formattedToday)
      .subscribe((data) => {
        this.asteroidFeed = data;
      });
  }
  startDateFilter = (date: Date | null): boolean => {
    // Block future dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date ? date <= today : false;
  };

  endDateFilter = (date: Date | null): boolean => {
    const start = this.asteroidFilterForm?.get('startDate')?.value;
    if (!date || !start) return false;
    const startDate = start instanceof Date ? start : new Date(start);
    const diff = (date.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    return diff > 0 && diff <= 7;
  };

  onSearch() {
    const startDateVal = this.asteroidFilterForm.get('startDate')?.value;
    const endDateVal = this.asteroidFilterForm.get('endDate')?.value;

    const formattedStartDate =
      startDateVal instanceof Date
        ? startDateVal.toISOString().slice(0, 10)
        : startDateVal;

    const formattedEndDate =
      endDateVal instanceof Date
        ? endDateVal.toISOString().slice(0, 10)
        : endDateVal;

    this.asteroidService
      .getAsteroidData(formattedStartDate, formattedEndDate)
      .subscribe((data) => {
        this.asteroidFeed = data;
      });
  }
}
