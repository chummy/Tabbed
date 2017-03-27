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
    ObservationsComponent
}
from "./observations.component";

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
// START_CUSTOM_CODE_observationsModelModuleImports

// END_CUSTOM_CODE_observationsModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptHttpModule,

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_observationsModelModuleImportDeclaration

        // END_CUSTOM_CODE_observationsModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.ObservationsListComponent,

        common.ObservationsDetailComponent,

        // START_CUSTOM_CODE_observationsModelComponentDeclarations

        // END_CUSTOM_CODE_observationsModelComponentDeclarations
        /// module declarations

        ObservationsComponent
    ],
    exports: [

        common.ObservationsListComponent,

        common.ObservationsDetailComponent,

        /// module exports

        ObservationsComponent
    ],
    providers: [

        // START_CUSTOM_CODE_observationsModelModuleProviders

        // END_CUSTOM_CODE_observationsModelModuleProviders

        /// module providers

        common.ObservationsService
    ]
})

export class ObservationsModule {}