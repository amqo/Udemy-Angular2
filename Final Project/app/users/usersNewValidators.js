System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsersNewValidators;
    return {
        setters:[],
        execute: function() {
            UsersNewValidators = (function () {
                function UsersNewValidators() {
                }
                UsersNewValidators.mustBeAValidEmail = function (control) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = re.test(control.value);
                    if (valid)
                        return null;
                    return { mustBeAValidEmail: true };
                };
                return UsersNewValidators;
            }());
            exports_1("UsersNewValidators", UsersNewValidators);
        }
    }
});
//# sourceMappingURL=usersNewValidators.js.map