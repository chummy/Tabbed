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
    ActivitiesComponent
}
from "./activities.component";

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
// START_CUSTOM_CODE_activitiesModelModuleImports

// END_CUSTOM_CODE_activitiesModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptHttpModule,

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_activitiesModelModuleImportDeclaration

        // END_CUSTOM_CODE_activitiesModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.ActivitiesListComponent,

        common.ActivitiesDetailComponent,

        // START_CUSTOM_CODE_activitiesModelComponentDeclarations

        // END_CUSTOM_CODE_activitiesModelComponentDeclarations
        /// module declarations

        ActivitiesComponent
    ],
    exports: [

        common.ActivitiesListComponent,

        common.ActivitiesDetailComponent,

        /// module exports

        ActivitiesComponent
    ],
    providers: [

        // START_CUSTOM_CODE_activitiesModelModuleProviders

        // END_CUSTOM_CODE_activitiesModelModuleProviders

        /// module providers

        common.ActivitiesService
    ]
})

export class ActivitiesModule {}