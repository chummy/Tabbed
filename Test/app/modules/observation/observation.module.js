"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var observation_component_1 = require("./observation.component");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
// START_CUSTOM_CODE_observationModelModuleImports
// END_CUSTOM_CODE_observationModelModuleImports
/// module additional imports
var common = require("./shared");
var ObservationModule = (function () {
    function ObservationModule() {
    }
    return ObservationModule;
}());
ObservationModule = __decorate([
    core_1.NgModule({
        imports: [
            // START_CUSTOM_CODE_observationModelModuleImportDeclarations
            // END_CUSTOM_CODE_observationModelModuleImportDeclarations
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            /// module declarations
            observation_component_1.ObservationComponent
        ],
        exports: [
            /// module exports
            observation_component_1.ObservationComponent
        ],
        providers: [
            // START_CUSTOM_CODE_observationModelModuleProviders
            // END_CUSTOM_CODE_observationModelModuleProviders
            /// module providers
            common.ObservationService
        ]
    }),
    __metadata("design:paramtypes", [])
], ObservationModule);
exports.ObservationModule = ObservationModule;
//# sourceMappingURL=observation.module.js.map