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
    CommentsDetailViewComponent
}
from "./commentsDetailView.component";

import {
    NativeScriptRouterModule
}
from "nativescript-angular/router";
import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
// START_CUSTOM_CODE_commentsDetailViewModelModuleImports

// END_CUSTOM_CODE_commentsDetailViewModelModuleImports
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptRouterModule,
        NativeScriptFormsModule,
        // START_CUSTOM_CODE_commentsDetailViewModelModuleImportDeclaration

        // END_CUSTOM_CODE_commentsDetailViewModelModuleImportDeclaration
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.CommentsDetailViewListComponent,

        common.CommentsDetailViewDetailComponent,

        // START_CUSTOM_CODE_commentsDetailViewModelComponentDeclarations

        // END_CUSTOM_CODE_commentsDetailViewModelComponentDeclarations
        /// module declarations

        CommentsDetailViewComponent
    ],
    exports: [

        common.CommentsDetailViewListComponent,

        common.CommentsDetailViewDetailComponent,

        /// module exports

        CommentsDetailViewComponent
    ],
    providers: [

        // START_CUSTOM_CODE_commentsDetailViewModelModuleProviders

        // END_CUSTOM_CODE_commentsDetailViewModelModuleProviders

        /// module providers

        common.CommentsDetailViewService
    ]
})

export class CommentsDetailViewModule {}