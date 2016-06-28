System.register(['angular2/core', 'angular2/common', './passwordValidators', './password.service'], function(exports_1, context_1) {
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
    var core_1, common_1, passwordValidators_1, password_service_1;
    var ChangePasswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            },
            function (password_service_1_1) {
                password_service_1 = password_service_1_1;
            }],
        execute: function() {
            let ChangePasswordFormComponent = class ChangePasswordFormComponent {
                constructor(formBuilder, passwordService) {
                    this.passwordService = passwordService;
                    this.form = formBuilder.group({
                        current: [''],
                        newPassword: ['', passwordValidators_1.PasswordValidators.cannotContainSpace],
                        confirmPassword: ['']
                    }, { validator: passwordValidators_1.PasswordValidators.confirmPasswordMatches });
                }
                changePassword() {
                    var currentControl = this.form.find('current');
                    if (currentControl) {
                        var currentValue = currentControl.value;
                        if (!this.passwordService.checkCurrentPassword(currentValue)) {
                            currentControl.setErrors({
                                wrongCurrentPassword: true
                            });
                        }
                        else {
                            alert('Password succesfully changed!');
                        }
                    }
                }
            };
            ChangePasswordFormComponent = __decorate([
                core_1.Component({
                    selector: 'change-password-form',
                    templateUrl: 'app/change-password-form.template.html',
                    providers: [password_service_1.PasswordService]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, password_service_1.PasswordService])
            ], ChangePasswordFormComponent);
            exports_1("ChangePasswordFormComponent", ChangePasswordFormComponent);
        }
    }
});
//# sourceMappingURL=change-password-form.component.js.map