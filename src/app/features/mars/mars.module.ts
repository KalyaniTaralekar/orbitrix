import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MarsRoutingModule } from './mars-routing.module';
import { MarsGalleryComponent } from './components/mars/mars-gallery.component';
import { PhotoCardComponent } from './components/card/photo-card/photo-card.component';

@NgModule({
  declarations: [MarsGalleryComponent, PhotoCardComponent],
  imports: [CommonModule, MarsRoutingModule, ReactiveFormsModule],
})
export class MarsModule {}
