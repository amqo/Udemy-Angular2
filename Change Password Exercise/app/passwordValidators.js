System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            class PasswordValidators {
                static cannotContainSpace(control) {
                    if (control.value.indexOf(' ') >= 0)
                        return {
                            cannotContainSpace: true
                        };
                    return null;
                }
                static confirmPasswordMatches(group) {
                    var currentPassword = group.find('current');
                    var newPassword = group.find('newPassword');
                    var confirmPassword = group.find('confirmPassword');
                    if (currentPassword.value === newPassword.value) {
                        return {
                            newPasswordDifferent: true
                        };
                    }
                    if (newPassword.value === confirmPassword.value)
                        return null;
                    return {
                        confirmPasswordMatches: true
                    };
                }
            }
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map