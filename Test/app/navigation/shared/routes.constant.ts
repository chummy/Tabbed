import {
    Routes
}
from "@angular/router";

/// modules imports
import { PatientsComponent } from "../../modules/patients/patients.component";
import { UsersComponent } from "../../modules/users/users.component";
import { ObservationComponent } from "../../modules/observation/observation.component";
import { LoginComponent } from "../../modules/login/login.component";
import { AboutViewComponent } from "../../modules/aboutView/aboutView.component";
import { UserDetailViewComponent } from "../../modules/userDetailView/userDetailView.component";
import { FormViewComponent } from "../../modules/formView/formView.component";
import { PatientsDetailViewComponent } from "../../modules/patientsDetailView/patientsDetailView.component";

export const ROUTES: Routes = [
    /// start routes declaration
{ path: "patients", component: PatientsComponent },
{ path: "users", component: UsersComponent },
{ path: "observation", component: ObservationComponent },
{ path: "login", component: LoginComponent },
{ path: "aboutView", component: AboutViewComponent },
{ path: "userDetailView", component: UserDetailViewComponent },
{ path: "formView", component: FormViewComponent },
{ path: "patientsDetailView", component: PatientsDetailViewComponent },
    {
        path: "",
        component: PatientsDetailViewComponent
    }
    /// end routes declaration
];