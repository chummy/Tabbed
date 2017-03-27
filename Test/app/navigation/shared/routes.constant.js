"use strict";
/// modules imports
var observations_component_1 = require("../../modules/observations/observations.component");
var clinical_component_1 = require("../../modules/clinical/clinical.component");
var activities_component_1 = require("../../modules/activities/activities.component");
var visit_component_1 = require("../../modules/visit/visit.component");
var patients_component_1 = require("../../modules/patients/patients.component");
var users_component_1 = require("../../modules/users/users.component");
var observation_component_1 = require("../../modules/observation/observation.component");
var login_component_1 = require("../../modules/login/login.component");
var aboutView_component_1 = require("../../modules/aboutView/aboutView.component");
var userDetailView_component_1 = require("../../modules/userDetailView/userDetailView.component");
var formView_component_1 = require("../../modules/formView/formView.component");
var patientsDetailView_component_1 = require("../../modules/patientsDetailView/patientsDetailView.component");
exports.ROUTES = [
    /// start routes declaration
    { path: "observations", component: observations_component_1.ObservationsComponent },
    { path: "clinical", component: clinical_component_1.ClinicalComponent },
    { path: "activities", component: activities_component_1.ActivitiesComponent },
    { path: "visit", component: visit_component_1.VisitComponent },
    { path: "patients", component: patients_component_1.PatientsComponent },
    { path: "users", component: users_component_1.UsersComponent },
    { path: "observation", component: observation_component_1.ObservationComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "aboutView", component: aboutView_component_1.AboutViewComponent },
    { path: "userDetailView", component: userDetailView_component_1.UserDetailViewComponent },
    { path: "formView", component: formView_component_1.FormViewComponent },
    { path: "patientsDetailView", component: patientsDetailView_component_1.PatientsDetailViewComponent },
    {
        path: "",
        component: patients_component_1.PatientsComponent
    }
];
//# sourceMappingURL=routes.constant.js.map