"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var activities_component_1 = require("./activities.component");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_activitiesModelModuleImports
// END_CUSTOM_CODE_activitiesModelModuleImports
/// module additional imports
var common = require("./shared");
var ActivitiesModule = (function () {
    function ActivitiesModule() {
    }
    return ActivitiesModule;
}());
ActivitiesModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            // START_CUSTOM_CODE_activitiesModelModuleImportDeclaration
            // END_CUSTOM_CODE_activitiesModelModuleImportDeclaration
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            common.ActivitiesListComponent,
            common.ActivitiesDetailComponent,
            // START_CUSTOM_CODE_activitiesModelComponentDeclarations
            // END_CUSTOM_CODE_activitiesModelComponentDeclarations
            /// module declarations
            activities_component_1.ActivitiesComponent
        ],
        exports: [
            common.ActivitiesListComponent,
            common.ActivitiesDetailComponent,
            /// module exports
            activities_component_1.ActivitiesComponent
        ],
        providers: [
            // START_CUSTOM_CODE_activitiesModelModuleProviders
            // END_CUSTOM_CODE_activitiesModelModuleProviders
            /// module providers
            common.ActivitiesService
        ]
    }),
    __metadata("design:paramtypes", [])
], ActivitiesModule);
exports.ActivitiesModule = ActivitiesModule;
//# sourceMappingURL=activities.module.js.map