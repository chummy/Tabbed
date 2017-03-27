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
    VisitComponent
}
from "./visit.component";

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
// START_CUSTOM_CODE_visitModelModuleImports

// END_CUSTOM_CODE_visitModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptHttpModule,

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_visitModelModuleImportDeclaration

        // END_CUSTOM_CODE_visitModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.VisitListComponent,

        common.VisitDetailComponent,

        // START_CUSTOM_CODE_visitModelComponentDeclarations

        // END_CUSTOM_CODE_visitModelComponentDeclarations
        /// module declarations

        VisitComponent
    ],
    exports: [

        common.VisitListComponent,

        common.VisitDetailComponent,

        /// module exports

        VisitComponent
    ],
    providers: [

        // START_CUSTOM_CODE_visitModelModuleProviders

        // END_CUSTOM_CODE_visitModelModuleProviders

        /// module providers

        common.VisitService
    ]
})

export class VisitModule {}