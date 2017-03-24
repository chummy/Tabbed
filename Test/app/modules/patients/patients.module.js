"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var patients_component_1 = require("./patients.component");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_patientsModelModuleImports
// END_CUSTOM_CODE_patientsModelModuleImports
/// module additional imports
var common = require("./shared");
var PatientsModule = (function () {
    function PatientsModule() {
    }
    PatientsModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                // START_CUSTOM_CODE_patientsModelModuleImportDeclaration
                // END_CUSTOM_CODE_patientsModelModuleImportDeclaration
                /// module imports declaration
                platform_1.NativeScriptModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                common.PatientsListComponent,
                common.PatientsDetailComponent,
                common.PatientsAddComponent,
                common.PatientsEditComponent,
                // START_CUSTOM_CODE_patientsModelComponentDeclarations
                // END_CUSTOM_CODE_patientsModelComponentDeclarations
                /// module declarations
                patients_component_1.PatientsComponent
            ],
            exports: [
                common.PatientsListComponent,
                common.PatientsDetailComponent,
                common.PatientsAddComponent,
                common.PatientsEditComponent,
                /// module exports
                patients_component_1.PatientsComponent
            ],
            providers: [
                // START_CUSTOM_CODE_patientsModelModuleProviders
                // END_CUSTOM_CODE_patientsModelModuleProviders
                /// module providers
                common.PatientsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsModule);
    return PatientsModule;
}());
exports.PatientsModule = PatientsModule;
//# sourceMappingURL=patients.module.js.map