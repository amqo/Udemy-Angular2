
import { NgModule }     from '@angular/core';

import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
    declarations: [
        PhotosComponent,
        PhotoDetailsComponent
    ],
    exports: [
        PhotosComponent,
        PhotoDetailsComponent
    ]
})
export class PhotosModule {
}