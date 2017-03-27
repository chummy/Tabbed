"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var userDetailView_component_1 = require("./userDetailView.component");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_userDetailViewModelModuleImports
// END_CUSTOM_CODE_userDetailViewModelModuleImports
/// module additional imports
var common = require("./shared");
var UserDetailViewModule = (function () {
    function UserDetailViewModule() {
    }
    return UserDetailViewModule;
}());
UserDetailViewModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            // START_CUSTOM_CODE_userDetailViewModelModuleImportDeclaration
            // END_CUSTOM_CODE_userDetailViewModelModuleImportDeclaration
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            common.UserDetailViewListComponent,
            common.UserDetailViewDetailComponent,
            common.UserDetailViewAddComponent,
            common.UserDetailViewEditComponent,
            // START_CUSTOM_CODE_userDetailViewModelComponentDeclarations
            // END_CUSTOM_CODE_userDetailViewModelComponentDeclarations
            /// module declarations
            userDetailView_component_1.UserDetailViewComponent
        ],
        exports: [
            common.UserDetailViewListComponent,
            common.UserDetailViewDetailComponent,
            common.UserDetailViewAddComponent,
            common.UserDetailViewEditComponent,
            /// module exports
            userDetailView_component_1.UserDetailViewComponent
        ],
        providers: [
            // START_CUSTOM_CODE_userDetailViewModelModuleProviders
            // END_CUSTOM_CODE_userDetailViewModelModuleProviders
            /// module providers
            common.UserDetailViewService
        ]
    }),
    __metadata("design:paramtypes", [])
], UserDetailViewModule);
exports.UserDetailViewModule = UserDetailViewModule;
//# sourceMappingURL=userDetailView.module.js.map