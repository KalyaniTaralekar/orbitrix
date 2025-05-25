import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AsteroidFeed } from '../../models/asteroids.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-asteroids-table',
  templateUrl: './asteroids-table.component.html',
  styleUrls: ['./asteroids-table.component.scss'],
})
export class AsteroidsTableComponent implements OnInit, OnChanges,AfterViewInit {

  @Input() asteroidFeed!: AsteroidFeed;
  displayedColumns: string[] = [
    'name',
    'velocity',
    'size',
    'distance',
    'approachDate',
    'isHazardous',
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['asteroidFeed'] && changes['asteroidFeed'].currentValue) {
      const mappedAsteroids = Object.values(
        this.asteroidFeed.near_earth_objects
      )
        .flat()
        .map((asteroid: any) => ({
          name: asteroid.name,
           velocity: parseFloat(
            asteroid.close_approach_data?.[0]?.relative_velocity?.kilometers_per_hour ?? '0'+' km/h'
          ).toFixed(3),
          size: parseFloat(
            asteroid.estimated_diameter?.kilometers?.estimated_diameter_max ?? '0'
          ).toFixed(3)+' km',
          distance: parseFloat(
            asteroid.close_approach_data?.[0]?.miss_distance?.kilometers ?? '0'+' km'
          ).toFixed(3),
          approachDate:
            asteroid.close_approach_data?.[0]?.close_approach_date ?? '',
          isHazardous: asteroid.is_potentially_hazardous_asteroid.toString(),
        }));
      this.dataSource.data = mappedAsteroids;
    } else {
      this.dataSource.data = [];
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
