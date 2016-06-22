System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CURRENT, PasswordService;
    return {
        setters:[],
        execute: function() {
            CURRENT = "12345";
            class PasswordService {
                checkCurrentPassword(password) {
                    return password === CURRENT;
                }
            }
            exports_1("PasswordService", PasswordService);
        }
    }
});
//# sourceMappingURL=password.service.js.map