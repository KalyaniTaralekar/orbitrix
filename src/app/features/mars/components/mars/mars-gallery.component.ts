import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MarsPhoto } from '../../models/mars-gallery.model';
import { MarsService } from '../../services/mars.service';

@Component({
  selector: 'app-mars-gallery',
  templateUrl: './mars-gallery.component.html',
  styleUrls: ['./mars-gallery.component.scss'],
})
export class MarsGalleryComponent implements OnInit {
  filterForm: FormGroup;
  photos: MarsPhoto[] = [];
  loading: boolean = true;
  error: string | null = null;

  rovers = [
    'Curiosity',
    'Opportunity',
    'Spirit',
    'Perseverance',
  ];

  constructor(private fb: FormBuilder, private marsService: MarsService) {
    this.filterForm = this.fb.group({
      rover: [''],
    });
  }

  ngOnInit(): void {
    this.filterForm.patchValue({
      rover: 'Perseverance',
    });
    this.loadLatestPhotos();
  }

  loadLatestPhotos() {
    this.loading = true;
    this.error = null;
    const rover = this.filterForm.get('rover')?.value;
    this.marsService
      .getPhotos(rover)
      .subscribe((photos) => (this.photos = photos,
    console.log(this.photos)

      ));
  }

  onSearch() {
    this.loading = true;
    const rover = this.filterForm.get('rover')?.value;
        this.marsService
      .getPhotos(rover)
      .subscribe((photos) => (this.photos = photos
      ));
  }
}
