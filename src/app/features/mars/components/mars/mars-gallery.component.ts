import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mars-gallery',
  templateUrl: './mars-gallery.component.html',
  styleUrls: ['./mars-gallery.component.scss'],
})
export class MarsGalleryComponent implements OnInit {
  filterForm: FormGroup;
  cameras = [
    { label: 'Front Hazard Avoidance Camera', value: 'FHAZ' },
    { label: 'Rear Hazard Avoidance Camera', value: 'RHAZ' },
    { label: 'Navigation Camera', value: 'NAVCAM' },
    { label: 'Mast Camera', value: 'MAST' },
    { label: 'Chemistry and Camera Complex', value: 'CHEMCAM' },
    { label: 'Mars Hand Lens Imager', value: 'MAHLI' },
    { label: 'Mars Descent Imager', value: 'MARDI' },
    { label: 'Panoramic Camera', value: 'PANCAM' },
    { label: 'Miniature Thermal Emission Spectrometer', value: 'MINITES' },
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      date: [''],
      camera: [''],
    });
  }

  ngOnInit(): void {
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    this.filterForm.patchValue({
      date: today,
    });
  }
}
