import { Router, RouterModule } '@angular/router';

import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details.component';

export const photosRouting = RouterModule.forChild([
  { path: 'photos/:id', component: PhotoDetailsComponent },
  { path: 'photos', component: PhotosComponent }
]);
