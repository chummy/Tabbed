"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var visit_component_1 = require("./visit.component");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_visitModelModuleImports
// END_CUSTOM_CODE_visitModelModuleImports
/// module additional imports
var common = require("./shared");
var VisitModule = (function () {
    function VisitModule() {
    }
    return VisitModule;
}());
VisitModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            // START_CUSTOM_CODE_visitModelModuleImportDeclaration
            // END_CUSTOM_CODE_visitModelModuleImportDeclaration
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            common.VisitListComponent,
            common.VisitDetailComponent,
            // START_CUSTOM_CODE_visitModelComponentDeclarations
            // END_CUSTOM_CODE_visitModelComponentDeclarations
            /// module declarations
            visit_component_1.VisitComponent
        ],
        exports: [
            common.VisitListComponent,
            common.VisitDetailComponent,
            /// module exports
            visit_component_1.VisitComponent
        ],
        providers: [
            // START_CUSTOM_CODE_visitModelModuleProviders
            // END_CUSTOM_CODE_visitModelModuleProviders
            /// module providers
            common.VisitService
        ]
    }),
    __metadata("design:paramtypes", [])
], VisitModule);
exports.VisitModule = VisitModule;
//# sourceMappingURL=visit.module.js.map