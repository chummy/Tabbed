"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var users_component_1 = require("./users.component");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_usersModelModuleImports
// END_CUSTOM_CODE_usersModelModuleImports
/// module additional imports
var common = require("./shared");
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                // START_CUSTOM_CODE_usersModelModuleImportDeclaration
                // END_CUSTOM_CODE_usersModelModuleImportDeclaration
                /// module imports declaration
                platform_1.NativeScriptModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                common.UsersListComponent,
                common.UsersDetailComponent,
                common.UsersAddComponent,
                common.UsersEditComponent,
                // START_CUSTOM_CODE_usersModelComponentDeclarations
                // END_CUSTOM_CODE_usersModelComponentDeclarations
                /// module declarations
                users_component_1.UsersComponent
            ],
            exports: [
                common.UsersListComponent,
                common.UsersDetailComponent,
                common.UsersAddComponent,
                common.UsersEditComponent,
                /// module exports
                users_component_1.UsersComponent
            ],
            providers: [
                // START_CUSTOM_CODE_usersModelModuleProviders
                // END_CUSTOM_CODE_usersModelModuleProviders
                /// module providers
                common.UsersService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map