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
    ObservationComponent
}
from "./observation.component";

import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
// START_CUSTOM_CODE_observationModelModuleImports

// END_CUSTOM_CODE_observationModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        // START_CUSTOM_CODE_observationModelModuleImportDeclarations

        // END_CUSTOM_CODE_observationModelModuleImportDeclarations
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [
        /// module declarations
        ObservationComponent
    ],
    exports: [
        /// module exports
        ObservationComponent
    ],
    providers: [

        // START_CUSTOM_CODE_observationModelModuleProviders

        // END_CUSTOM_CODE_observationModelModuleProviders

        /// module providers

        common.ObservationService
    ]
})

export class ObservationModule {}