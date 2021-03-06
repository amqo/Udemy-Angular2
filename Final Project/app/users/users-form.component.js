System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', './usersNewValidators', './users.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, usersNewValidators_1, users_service_1, user_1;
    var UsersFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (usersNewValidators_1_1) {
                usersNewValidators_1 = usersNewValidators_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UsersFormComponent = (function () {
                function UsersFormComponent(_usersService, _routeParams, _router, formBuilder) {
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.saving = false;
                    this.title = '';
                    this.user = new user_1.User();
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
                UsersFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userId = this._routeParams.get('id');
                    this.title = userId ? 'Edit User' : 'New User';
                    if (!userId)
                        return;
                    this._usersService.getUser(userId)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UsersFormComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.form.dirty && !this.saving) {
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    }
                };
                UsersFormComponent.prototype.save = function () {
                    var _this = this;
                    if (this.user.id) {
                        this._usersService.updateUser(this.user)
                            .subscribe(function (res) {
                            _this.saving = true;
                            console.log('Result from edit', res);
                        }, null, function () {
                            console.log('Edit form completed, redirecting...');
                            _this._router.navigate(['Users']);
                        });
                    }
                    else {
                        this._usersService.addUser(this.user)
                            .subscribe(function (res) {
                            // Instead of using a flag, make the form clean
                            // this.form.markAsPristine();
                            _this.saving = true;
                            console.log('Result from post new', res);
                        }, null, function () {
                            console.log('Post new form completed, redirecting...');
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                UsersFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/users-form.component.html',
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, router_deprecated_1.RouteParams, router_deprecated_1.Router, common_1.FormBuilder])
                ], UsersFormComponent);
                return UsersFormComponent;
            }());
            exports_1("UsersFormComponent", UsersFormComponent);
        }
    }
});
//# sourceMappingURL=users-form.component.js.map