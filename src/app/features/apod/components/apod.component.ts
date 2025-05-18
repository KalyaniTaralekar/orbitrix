import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApodService } from '../services/apod.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Apod } from '../models/apod.model';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
})
export class ApodComponent implements OnInit {
  apodData: Apod | null = null;
  loading = true;
  safeVideoUrl: SafeResourceUrl | null = null;
  errorMessage: string | null = null;
  imageError = false;

  constructor(
    private apodService: ApodService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadApodData();
  }

  loadApodData(): void {
    this.loading = true;
    this.errorMessage = null;
    this.imageError = false;

    this.apodService.getApod().subscribe({
      next: (data: Apod) => {
        this.apodData = data;
        if (
          this.apodData.media_type === 'video' ||
          (this.apodData.media_type === 'other' &&
            this.apodData.url?.includes('youtube'))
        ) {
          this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.apodData.url
          );
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load  data. Please try again later.';
        this.loading = false;
        console.error('Error fetching data:', error);
      },
    });
  }

  onImageError(): void {
    this.imageError = true;
    this.errorMessage = 'Failed to load image. Please try again later.';
  }

  retryLoading(): void {
    this.loadApodData();
  }
}
