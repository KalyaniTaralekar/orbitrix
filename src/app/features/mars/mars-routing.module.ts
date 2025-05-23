import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarsGalleryComponent } from './components/mars/mars-gallery.component';

const routes: Routes = [{ path: '', component: MarsGalleryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarsRoutingModule {}
