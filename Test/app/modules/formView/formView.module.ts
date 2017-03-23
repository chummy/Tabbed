import {
    NgModule
}
from "@angular/core";

import {
    NativeScriptModule
}
from "nativescript-angular/platform";

import {
    SharedModule
}
from "../../shared/shared.module";
import {
    FormViewComponent
}
from "./formView.component";

import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
// START_CUSTOM_CODE_formViewModelModuleImports

// END_CUSTOM_CODE_formViewModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        // START_CUSTOM_CODE_formViewModelModuleImportDeclarations

        // END_CUSTOM_CODE_formViewModelModuleImportDeclarations
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [
        /// module declarations
        FormViewComponent
    ],
    exports: [
        /// module exports
        FormViewComponent
    ],
    providers: [

        // START_CUSTOM_CODE_formViewModelModuleProviders

        // END_CUSTOM_CODE_formViewModelModuleProviders

        /// module providers

        common.FormViewService
    ]
})

export class FormViewModule {}