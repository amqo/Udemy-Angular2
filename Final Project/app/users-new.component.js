System.register(['angular2/core', 'angular2/common', 'angular2/router', './usersNewValidators', './users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, usersNewValidators_1, users_service_1;
    var UsersNewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (usersNewValidators_1_1) {
                usersNewValidators_1 = usersNewValidators_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            let UsersNewComponent = class UsersNewComponent {
                constructor(_usersService, _router, formBuilder) {
                    this._usersService = _usersService;
                    this._router = _router;
                    this.saving = false;
                    this.form = formBuilder.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([common_1.Validators.required, usersNewValidators_1.UsersNewValidators.mustBeAValidEmail])],
                        phone: [],
                        address: formBuilder.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipCode: []
                        })
                    });
                }
                routerCanDeactivate(next, previous) {
                    if (this.form.dirty && !this.saving) {
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    }
                }
                save() {
                    // Instead of using a flag, make the form clean
                    this.saving = true;
                    this._usersService.postUser(this.form.value)
                        .subscribe(res => {
                        console.log('Result from post', res);
                    }, null, () => {
                        console.log('Post form completed, redirecting...');
                        this._router.navigate(['Users']);
                    });
                }
            };
            UsersNewComponent = __decorate([
                core_1.Component({
                    selector: 'users-new',
                    templateUrl: 'app/users-new.component.html',
                    providers: [users_service_1.UsersService]
                }), 
                __metadata('design:paramtypes', [users_service_1.UsersService, router_1.Router, common_1.FormBuilder])
            ], UsersNewComponent);
            exports_1("UsersNewComponent", UsersNewComponent);
        }
    }
});
//# sourceMappingURL=users-new.component.js.map