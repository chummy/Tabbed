"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var formView_component_1 = require("./formView.component");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
// START_CUSTOM_CODE_formViewModelModuleImports
// END_CUSTOM_CODE_formViewModelModuleImports
/// module additional imports
var common = require("./shared");
var FormViewModule = (function () {
    function FormViewModule() {
    }
    FormViewModule = __decorate([
        core_1.NgModule({
            imports: [
                // START_CUSTOM_CODE_formViewModelModuleImportDeclarations
                // END_CUSTOM_CODE_formViewModelModuleImportDeclarations
                router_1.NativeScriptRouterModule,
                forms_1.NativeScriptFormsModule,
                /// module imports declaration
                platform_1.NativeScriptModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                /// module declarations
                formView_component_1.FormViewComponent
            ],
            exports: [
                /// module exports
                formView_component_1.FormViewComponent
            ],
            providers: [
                // START_CUSTOM_CODE_formViewModelModuleProviders
                // END_CUSTOM_CODE_formViewModelModuleProviders
                /// module providers
                common.FormViewService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FormViewModule);
    return FormViewModule;
}());
exports.FormViewModule = FormViewModule;
//# sourceMappingURL=formView.module.js.map