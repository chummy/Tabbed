"use strict";
/// modules imports
var login_component_1 = require("../../modules/login/login.component");
var aboutView_component_1 = require("../../modules/aboutView/aboutView.component");
var commentsDetailView_component_1 = require("../../modules/commentsDetailView/commentsDetailView.component");
var userDetailView_component_1 = require("../../modules/userDetailView/userDetailView.component");
var formView_component_1 = require("../../modules/formView/formView.component");
var patientsDetailView_component_1 = require("../../modules/patientsDetailView/patientsDetailView.component");
exports.ROUTES = [
    /// start routes declaration
    { path: "login", component: login_component_1.LoginComponent },
    { path: "aboutView", component: aboutView_component_1.AboutViewComponent },
    { path: "commentsDetailView", component: commentsDetailView_component_1.CommentsDetailViewComponent },
    { path: "userDetailView", component: userDetailView_component_1.UserDetailViewComponent },
    { path: "formView", component: formView_component_1.FormViewComponent },
    { path: "patientsDetailView", component: patientsDetailView_component_1.PatientsDetailViewComponent },
    {
        path: "",
        component: login_component_1.LoginComponent
    }
];
//# sourceMappingURL=routes.constant.js.map