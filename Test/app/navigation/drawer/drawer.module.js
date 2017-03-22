"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var drawer_routes_1 = require("./drawer.routes");
var drawer_component_1 = require("./drawer.component");
var shared_module_1 = require("../../shared/shared.module");
var common = require("../shared");
var DrawerMenuModule = (function () {
    function DrawerMenuModule() {
    }
    DrawerMenuModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                drawer_routes_1.drawerMenuRouting,
                shared_module_1.SharedModule
            ].concat(common.MODULES),
            declarations: [
                drawer_component_1.DrawerMenuComponent,
                angular_1.SIDEDRAWER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DrawerMenuModule);
    return DrawerMenuModule;
}());
exports.DrawerMenuModule = DrawerMenuModule;
//# sourceMappingURL=drawer.module.js.map