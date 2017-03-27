import {
    Routes
}
from "@angular/router";

/// modules imports
import { ObservationsComponent } from "../../modules/observations/observations.component";
import { ClinicalComponent } from "../../modules/clinical/clinical.component";
import { ActivitiesComponent } from "../../modules/activities/activities.component";
import { VisitComponent } from "../../modules/visit/visit.component";
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
{ path: "observations", component: ObservationsComponent },
{ path: "clinical", component: ClinicalComponent },
{ path: "activities", component: ActivitiesComponent },
{ path: "visit", component: VisitComponent },
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
        component: PatientsComponent
    }
    /// end routes declaration
];