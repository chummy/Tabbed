"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var shared_module_1 = require("../../shared/shared.module");
var commentsDetailView_component_1 = require("./commentsDetailView.component");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
// START_CUSTOM_CODE_commentsDetailViewModelModuleImports
// END_CUSTOM_CODE_commentsDetailViewModelModuleImports
/// module additional imports
var common = require("./shared");
var CommentsDetailViewModule = (function () {
    function CommentsDetailViewModule() {
    }
    return CommentsDetailViewModule;
}());
CommentsDetailViewModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule,
            forms_1.NativeScriptFormsModule,
            // START_CUSTOM_CODE_commentsDetailViewModelModuleImportDeclaration
            // END_CUSTOM_CODE_commentsDetailViewModelModuleImportDeclaration
            /// module imports declaration
            platform_1.NativeScriptModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            common.CommentsDetailViewListComponent,
            common.CommentsDetailViewDetailComponent,
            // START_CUSTOM_CODE_commentsDetailViewModelComponentDeclarations
            // END_CUSTOM_CODE_commentsDetailViewModelComponentDeclarations
            /// module declarations
            commentsDetailView_component_1.CommentsDetailViewComponent
        ],
        exports: [
            common.CommentsDetailViewListComponent,
            common.CommentsDetailViewDetailComponent,
            /// module exports
            commentsDetailView_component_1.CommentsDetailViewComponent
        ],
        providers: [
            // START_CUSTOM_CODE_commentsDetailViewModelModuleProviders
            // END_CUSTOM_CODE_commentsDetailViewModelModuleProviders
            /// module providers
            common.CommentsDetailViewService
        ]
    }),
    __metadata("design:paramtypes", [])
], CommentsDetailViewModule);
exports.CommentsDetailViewModule = CommentsDetailViewModule;
//# sourceMappingURL=commentsDetailView.module.js.map