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
    ClinicalComponent
}
from "./clinical.component";

import {
    NativeScriptHttpModule
}
from "nativescript-angular/http";

import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
// START_CUSTOM_CODE_clinicalModelModuleImports

// END_CUSTOM_CODE_clinicalModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptHttpModule,

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_clinicalModelModuleImportDeclaration

        // END_CUSTOM_CODE_clinicalModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.ClinicalListComponent,

        common.ClinicalDetailComponent,

        // START_CUSTOM_CODE_clinicalModelComponentDeclarations

        // END_CUSTOM_CODE_clinicalModelComponentDeclarations
        /// module declarations

        ClinicalComponent
    ],
    exports: [

        common.ClinicalListComponent,

        common.ClinicalDetailComponent,

        /// module exports

        ClinicalComponent
    ],
    providers: [

        // START_CUSTOM_CODE_clinicalModelModuleProviders

        // END_CUSTOM_CODE_clinicalModelModuleProviders

        /// module providers

        common.ClinicalService
    ]
})

export class ClinicalModule {}