import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DrawerMenuComponent } from "./drawer.component";

import * as common from "../shared";
import * as shared from "../../shared";

const drawerMenuRoutes: Routes = [
  {
    path: "nav",
    component: DrawerMenuComponent,
    children: [...common.ROUTES]
  }
];

export const drawerMenuRouting: ModuleWithProviders = RouterModule.forChild(drawerMenuRoutes);
