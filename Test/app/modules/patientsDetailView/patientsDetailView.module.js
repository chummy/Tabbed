"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var patientsDetailView_component_1 = require("./patientsDetailView.component");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_patientsDetailViewModelModuleImports
// END_CUSTOM_CODE_patientsDetailViewModelModuleImports
/// module additional imports
var common = require("./shared");
var PatientsDetailViewModule = (function () {
    function PatientsDetailViewModule() {
    }
    PatientsDetailViewModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                // START_CUSTOM_CODE_patientsDetailViewModelModuleImportDeclaration
                // END_CUSTOM_CODE_patientsDetailViewModelModuleImportDeclaration
                /// module imports declaration
                platform_1.NativeScriptModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                common.PatientsDetailViewListComponent,
                common.PatientsDetailViewDetailComponent,
                // START_CUSTOM_CODE_patientsDetailViewModelComponentDeclarations
                // END_CUSTOM_CODE_patientsDetailViewModelComponentDeclarations
                /// module declarations
                patientsDetailView_component_1.PatientsDetailViewComponent
            ],
            exports: [
                common.PatientsDetailViewListComponent,
                common.PatientsDetailViewDetailComponent,
                /// module exports
                patientsDetailView_component_1.PatientsDetailViewComponent
            ],
            providers: [
                // START_CUSTOM_CODE_patientsDetailViewModelModuleProviders
                // END_CUSTOM_CODE_patientsDetailViewModelModuleProviders
                /// module providers
                common.PatientsDetailViewService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsDetailViewModule);
    return PatientsDetailViewModule;
}());
exports.PatientsDetailViewModule = PatientsDetailViewModule;
//# sourceMappingURL=patientsDetailView.module.js.map