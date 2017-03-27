/// modules imports
import { ObservationsModule } from "../../modules/observations/observations.module";
import { ClinicalModule } from "../../modules/clinical/clinical.module";
import { ActivitiesModule } from "../../modules/activities/activities.module";
import { VisitModule } from "../../modules/visit/visit.module";
import { PatientsModule } from "../../modules/patients/patients.module";
import { UsersModule } from "../../modules/users/users.module";
import { ObservationModule } from "../../modules/observation/observation.module";
import { LoginModule } from "../../modules/login/login.module";
import { AboutViewModule } from "../../modules/aboutView/aboutView.module";
import { UserDetailViewModule } from "../../modules/userDetailView/userDetailView.module";
import { FormViewModule } from "../../modules/formView/formView.module";
import { PatientsDetailViewModule } from "../../modules/patientsDetailView/patientsDetailView.module";

export const MODULES = [
/// start modules declaration
ObservationsModule,
ObservationsModule,
ClinicalModule,
ActivitiesModule,
VisitModule,
PatientsModule,
PatientsModule,
UsersModule,
ObservationModule,
LoginModule,
AboutViewModule,
UserDetailViewModule,
FormViewModule,
PatientsDetailViewModule
/// end modules declaration
];
