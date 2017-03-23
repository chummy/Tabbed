import {
    Routes
}
from "@angular/router";

/// modules imports
import { LoginComponent } from "../../modules/login/login.component";
import { AboutViewComponent } from "../../modules/aboutView/aboutView.component";
import { CommentsDetailViewComponent } from "../../modules/commentsDetailView/commentsDetailView.component";
import { UserDetailViewComponent } from "../../modules/userDetailView/userDetailView.component";
import { FormViewComponent } from "../../modules/formView/formView.component";
import { PatientsDetailViewComponent } from "../../modules/patientsDetailView/patientsDetailView.component";

export const ROUTES: Routes = [
    /// start routes declaration
{ path: "login", component: LoginComponent },
{ path: "aboutView", component: AboutViewComponent },
{ path: "commentsDetailView", component: CommentsDetailViewComponent },
{ path: "userDetailView", component: UserDetailViewComponent },
{ path: "formView", component: FormViewComponent },
{ path: "patientsDetailView", component: PatientsDetailViewComponent },
    {
        path: "",
        component: LoginComponent
    }
    /// end routes declaration
];