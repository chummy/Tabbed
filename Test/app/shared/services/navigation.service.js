"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var enums_1 = require("../enums");
var NavigationService = (function () {
    function NavigationService(_router) {
        this._router = _router;
        this._modes = enums_1.NavigationModes;
        this._mode = this._modes.TABSTRIP;
        this._routes = [
            { path: "patientsDetailView", title: "My Patients", icon: "\uf2c3" },
            { path: "formView", title: "Form", icon: "\uf02e" },
            { path: "userDetailView", title: "User Detail", icon: "\uf2be" },
            { path: "aboutView", title: "About", icon: "\uf05a" },
            { path: "login", title: "Login", icon: "\uf2be" },
            { path: "observation", title: "Observation", icon: "\uf030" },
            { path: "users", title: "Users", icon: "\uf2be" },
            { path: "patients", title: "Patients", icon: "\uf2be" },
        ];
        this._openDrawer$ = new rxjs_1.BehaviorSubject(false);
    }
    Object.defineProperty(NavigationService.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationService.prototype, "routes", {
        get: function () {
            return this._routes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationService.prototype, "openDrawer$", {
        get: function () {
            return this._openDrawer$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    NavigationService.prototype.navigateIndex = function () {
        this._router.navigate(["/"]);
    };
    NavigationService.prototype.navigate = function (path) {
        this._router.navigate(["/" + path]);
    };
    NavigationService.prototype.toggleDrawer = function () {
        this._openDrawer$.next(!this._openDrawer$.getValue());
    };
    return NavigationService;
}());
NavigationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], NavigationService);
exports.NavigationService = NavigationService;
var _a;
//# sourceMappingURL=navigation.service.js.map