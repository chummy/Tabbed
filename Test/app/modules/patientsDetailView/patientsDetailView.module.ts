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
    PatientsDetailViewComponent
}
from "./patientsDetailView.component";

import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
// START_CUSTOM_CODE_patientsDetailViewModelModuleImports

// END_CUSTOM_CODE_patientsDetailViewModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_patientsDetailViewModelModuleImportDeclaration

        // END_CUSTOM_CODE_patientsDetailViewModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.PatientsDetailViewListComponent,

        common.PatientsDetailViewDetailComponent,

        // START_CUSTOM_CODE_patientsDetailViewModelComponentDeclarations

        // END_CUSTOM_CODE_patientsDetailViewModelComponentDeclarations
        /// module declarations

        PatientsDetailViewComponent
    ],
    exports: [

        common.PatientsDetailViewListComponent,

        common.PatientsDetailViewDetailComponent,

        /// module exports

        PatientsDetailViewComponent
    ],
    providers: [

        // START_CUSTOM_CODE_patientsDetailViewModelModuleProviders

        // END_CUSTOM_CODE_patientsDetailViewModelModuleProviders

        /// module providers

        common.PatientsDetailViewService
    ]
})

export class PatientsDetailViewModule {}