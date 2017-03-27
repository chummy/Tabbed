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
    PatientsComponent
}
from "./patients.component";

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
// START_CUSTOM_CODE_patientsModelModuleImports

// END_CUSTOM_CODE_patientsModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptHttpModule,

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_patientsModelModuleImportDeclaration

        // END_CUSTOM_CODE_patientsModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.PatientsListComponent,

        common.PatientsDetailComponent,

        // START_CUSTOM_CODE_patientsModelComponentDeclarations

        // END_CUSTOM_CODE_patientsModelComponentDeclarations
        /// module declarations

        PatientsComponent
    ],
    exports: [

        common.PatientsListComponent,

        common.PatientsDetailComponent,

        /// module exports

        PatientsComponent
    ],
    providers: [

        // START_CUSTOM_CODE_patientsModelModuleProviders

        // END_CUSTOM_CODE_patientsModelModuleProviders

        /// module providers

        common.PatientsService
    ]
})

export class PatientsModule {}