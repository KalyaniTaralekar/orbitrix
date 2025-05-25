import { Component, Input, OnInit } from '@angular/core';
import { MarsPhoto } from '../../../models/mars-gallery.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  ngOnInit(): void {
    console.log('from child',this.photos)
  }
  @Input() photos!: MarsPhoto[];
}
