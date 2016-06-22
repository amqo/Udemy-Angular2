System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            class UsernameValidators {
                static cannotContainSpace(control) {
                    if (control.value.indexOf(' ') >= 0)
                        return {
                            cannotContainSpace: true
                        };
                    return null;
                }
                static shouldBeUnique(control) {
                    return new Promise(resolve => {
                        setTimeout(function () {
                            if (control.value == "some")
                                resolve({ shouldBeUnique: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                }
            }
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map