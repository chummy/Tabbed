/// modules imports
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
PatientsModule,
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
