import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";

import { drawerMenuRouting } from "./drawer.routes";
import { DrawerMenuComponent } from "./drawer.component";
import { SharedModule } from "../../shared/shared.module";

import * as common from "../shared";
import * as shared from "../../shared";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    drawerMenuRouting,
    SharedModule,
    ...common.MODULES
  ],
  declarations: [
    DrawerMenuComponent,
    SIDEDRAWER_DIRECTIVES
  ]
})
export class DrawerMenuModule {}
