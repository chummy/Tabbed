"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
/// additional imports
var element_registry_1 = require("nativescript-angular/element-registry");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
/// additional required modules
var mapbox = require("nativescript-mapbox");
element_registry_1.registerElement("Mapbox", function () { return mapbox.Mapbox; });
var drawer_module_1 = require("./navigation/drawer/drawer.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routes_1.appRoutes),
            drawer_module_1.DrawerMenuModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map