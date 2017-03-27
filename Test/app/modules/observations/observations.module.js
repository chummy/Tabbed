"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var observations_component_1 = require("./observations.component");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_observationsModelModuleImports
// END_CUSTOM_CODE_observationsModelModuleImports
/// module additional imports
var common = require("./shared");
var ObservationsModule = (function () {
    function ObservationsModule() {
    }
    return ObservationsModule;
}());
ObservationsModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            // START_CUSTOM_CODE_observationsModelModuleImportDeclaration
            // END_CUSTOM_CODE_observationsModelModuleImportDeclaration
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            common.ObservationsListComponent,
            common.ObservationsDetailComponent,
            // START_CUSTOM_CODE_observationsModelComponentDeclarations
            // END_CUSTOM_CODE_observationsModelComponentDeclarations
            /// module declarations
            observations_component_1.ObservationsComponent
        ],
        exports: [
            common.ObservationsListComponent,
            common.ObservationsDetailComponent,
            /// module exports
            observations_component_1.ObservationsComponent
        ],
        providers: [
            // START_CUSTOM_CODE_observationsModelModuleProviders
            // END_CUSTOM_CODE_observationsModelModuleProviders
            /// module providers
            common.ObservationsService
        ]
    }),
    __metadata("design:paramtypes", [])
], ObservationsModule);
exports.ObservationsModule = ObservationsModule;
//# sourceMappingURL=observations.module.js.map