"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
var not_found_component_1 = require('./not-found.component');
var messages_module_1 = require('./messages/messages.module');
var photos_module_1 = require('./photos/photos.module');
var app_routing_1 = require('./app.routing');
var photos_routing_1 = require('./photos/photos.routing');
var auth_service_1 = require('./auth.service');
var auth_guard_service_1 = require('./auth-guard.service');
var prevent_unsaved_changes_guard_service_1 = require('./prevent-unsaved-changes-guard.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                messages_module_1.MessagesModule,
                photos_module_1.PhotosModule,
                photos_routing_1.photosRouting, app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                not_found_component_1.NotFoundComponent
            ],
            providers: [
                auth_service_1.AuthService,
                auth_guard_service_1.AuthGuard,
                prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map