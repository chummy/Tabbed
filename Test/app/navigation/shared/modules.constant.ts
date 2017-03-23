/// modules imports
import { LoginModule } from "../../modules/login/login.module";
import { AboutViewModule } from "../../modules/aboutView/aboutView.module";
import { CommentsDetailViewModule } from "../../modules/commentsDetailView/commentsDetailView.module";
import { UserDetailViewModule } from "../../modules/userDetailView/userDetailView.module";
import { FormViewModule } from "../../modules/formView/formView.module";
import { PatientsDetailViewModule } from "../../modules/patientsDetailView/patientsDetailView.module";

export const MODULES = [
/// start modules declaration
LoginModule,
AboutViewModule,
CommentsDetailViewModule,
UserDetailViewModule,
FormViewModule,
PatientsDetailViewModule
/// end modules declaration
];
