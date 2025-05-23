import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MarsRoutingModule } from './mars-routing.module';
import { MarsGalleryComponent } from './components/mars/mars-gallery.component';

@NgModule({
  declarations: [MarsGalleryComponent],
  imports: [CommonModule, MarsRoutingModule, ReactiveFormsModule],
})
export class MarsModule {}
