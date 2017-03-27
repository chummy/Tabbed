"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var clinical_component_1 = require("./clinical.component");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_clinicalModelModuleImports
// END_CUSTOM_CODE_clinicalModelModuleImports
/// module additional imports
var common = require("./shared");
var ClinicalModule = (function () {
    function ClinicalModule() {
    }
    return ClinicalModule;
}());
ClinicalModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            // START_CUSTOM_CODE_clinicalModelModuleImportDeclaration
            // END_CUSTOM_CODE_clinicalModelModuleImportDeclaration
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            common.ClinicalListComponent,
            common.ClinicalDetailComponent,
            // START_CUSTOM_CODE_clinicalModelComponentDeclarations
            // END_CUSTOM_CODE_clinicalModelComponentDeclarations
            /// module declarations
            clinical_component_1.ClinicalComponent
        ],
        exports: [
            common.ClinicalListComponent,
            common.ClinicalDetailComponent,
            /// module exports
            clinical_component_1.ClinicalComponent
        ],
        providers: [
            // START_CUSTOM_CODE_clinicalModelModuleProviders
            // END_CUSTOM_CODE_clinicalModelModuleProviders
            /// module providers
            common.ClinicalService
        ]
    }),
    __metadata("design:paramtypes", [])
], ClinicalModule);
exports.ClinicalModule = ClinicalModule;
//# sourceMappingURL=clinical.module.js.map