import {
    Routes
}
from "@angular/router";

/// modules imports
import { HomeViewComponent } from "../../modules/homeView/homeView.component";

export const ROUTES: Routes = [
    /// start routes declaration
{ path: "homeView", component: HomeViewComponent },
    {
        path: "",
        component: HomeViewComponent
    }
    /// end routes declaration
];