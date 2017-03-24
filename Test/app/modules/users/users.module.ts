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
    UsersComponent
}
from "./users.component";

import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
// START_CUSTOM_CODE_usersModelModuleImports

// END_CUSTOM_CODE_usersModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_usersModelModuleImportDeclaration

        // END_CUSTOM_CODE_usersModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.UsersListComponent,

        common.UsersDetailComponent,

        common.UsersAddComponent,

        common.UsersEditComponent,

        // START_CUSTOM_CODE_usersModelComponentDeclarations

        // END_CUSTOM_CODE_usersModelComponentDeclarations
        /// module declarations

        UsersComponent
    ],
    exports: [

        common.UsersListComponent,

        common.UsersDetailComponent,

        common.UsersAddComponent,

        common.UsersEditComponent,

        /// module exports

        UsersComponent
    ],
    providers: [

        // START_CUSTOM_CODE_usersModelModuleProviders

        // END_CUSTOM_CODE_usersModelModuleProviders

        /// module providers

        common.UsersService
    ]
})

export class UsersModule {}