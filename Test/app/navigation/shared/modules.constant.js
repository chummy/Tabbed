"use strict";
/// modules imports
var patients_module_1 = require("../../modules/patients/patients.module");
var users_module_1 = require("../../modules/users/users.module");
var observation_module_1 = require("../../modules/observation/observation.module");
var login_module_1 = require("../../modules/login/login.module");
var aboutView_module_1 = require("../../modules/aboutView/aboutView.module");
var userDetailView_module_1 = require("../../modules/userDetailView/userDetailView.module");
var formView_module_1 = require("../../modules/formView/formView.module");
var patientsDetailView_module_1 = require("../../modules/patientsDetailView/patientsDetailView.module");
exports.MODULES = [
    /// start modules declaration
    patientsDetailView_module_1.PatientsDetailViewModule,
    patientsDetailView_module_1.PatientsDetailViewModule,
    patients_module_1.PatientsModule,
    users_module_1.UsersModule,
    observation_module_1.ObservationModule,
    login_module_1.LoginModule,
    aboutView_module_1.AboutViewModule,
    userDetailView_module_1.UserDetailViewModule,
    formView_module_1.FormViewModule,
    patientsDetailView_module_1.PatientsDetailViewModule
];
//# sourceMappingURL=modules.constant.js.map