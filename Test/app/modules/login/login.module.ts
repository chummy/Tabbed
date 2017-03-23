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
    LoginComponent
}
from "./login.component";

import {
    NativeScriptFormsModule
}
from "nativescript-angular/forms";
/// module additional imports

import * as common from "./shared";
import * as shared from "../../shared";

@
NgModule({
    imports: [

        NativeScriptFormsModule,
        /// module imports declaration

        NativeScriptModule,
        SharedModule
    ],
    declarations: [

        common.LoginSignInComponent,

        common.LoginSignUpComponent,

        /// module declarations

        LoginComponent
    ],
    exports: [

        common.LoginSignInComponent,

        common.LoginSignUpComponent,

        /// module exports

        LoginComponent
    ],
    providers: [
        /// module providers
        common.LoginService
    ]
})

export class LoginModule {}