"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var login_component_1 = require("./login.component");
var forms_1 = require("nativescript-angular/forms");
/// module additional imports
var common = require("./shared");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.NativeScriptFormsModule,
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            common.LoginSignInComponent,
            common.LoginSignUpComponent,
            /// module declarations
            login_component_1.LoginComponent
        ],
        exports: [
            common.LoginSignInComponent,
            common.LoginSignUpComponent,
            /// module exports
            login_component_1.LoginComponent
        ],
        providers: [
            /// module providers
            common.LoginService
        ]
    }),
    __metadata("design:paramtypes", [])
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map