"use strict";
var router_1 = require("@angular/router");
var drawer_component_1 = require("./drawer.component");
var common = require("../shared");
var drawerMenuRoutes = [
    {
        path: "nav",
        component: drawer_component_1.DrawerMenuComponent,
        children: common.ROUTES.slice()
    }
];
exports.drawerMenuRouting = router_1.RouterModule.forChild(drawerMenuRoutes);
//# sourceMappingURL=drawer.routes.js.map