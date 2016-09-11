"use strict";
var router_1 = require('@angular/router');
var photos_component_1 = require('./photos.component');
var photo_details_component_1 = require('./photo-details.component');
exports.photosRouting = router_1.RouterModule.forChild([
    { path: 'photos/:id', component: photo_details_component_1.PhotoDetailsComponent },
    { path: 'photos', component: photos_component_1.PhotosComponent }
]);
//# sourceMappingURL=photos.routing.js.map