import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import * as common from "./";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [
    /// additional declarations
    common.ActionBarComponent,
    common.IfAndroidDirective,
    common.IfIosDirective,
    common.HyperlinkDirective
  ],
  exports: [
    /// additional exports
    common.ActionBarComponent,
    common.IfAndroidDirective,
    common.IfIosDirective,
    common.HyperlinkDirective
  ],
  providers: [
    /// additional services
    common.NavigationService,
    common.NotificationService

  ]
})
export class SharedModule {}
