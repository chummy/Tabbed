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
    UserDetailViewComponent
}
from "./userDetailView.component";

import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
// START_CUSTOM_CODE_userDetailViewModelModuleImports

// END_CUSTOM_CODE_userDetailViewModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_userDetailViewModelModuleImportDeclaration

        // END_CUSTOM_CODE_userDetailViewModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.UserDetailViewListComponent,

        common.UserDetailViewDetailComponent,

        common.UserDetailViewAddComponent,

        common.UserDetailViewEditComponent,

        // START_CUSTOM_CODE_userDetailViewModelComponentDeclarations

        // END_CUSTOM_CODE_userDetailViewModelComponentDeclarations
        /// module declarations

        UserDetailViewComponent
    ],
    exports: [

        common.UserDetailViewListComponent,

        common.UserDetailViewDetailComponent,

        common.UserDetailViewAddComponent,

        common.UserDetailViewEditComponent,

        /// module exports

        UserDetailViewComponent
    ],
    providers: [

        // START_CUSTOM_CODE_userDetailViewModelModuleProviders

        // END_CUSTOM_CODE_userDetailViewModelModuleProviders

        /// module providers

        common.UserDetailViewService
    ]
})

export class UserDetailViewModule {}