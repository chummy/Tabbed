"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// START_CUSTOM_CODE_activitiesModelServiceImports
// END_CUSTOM_CODE_activitiesModelServiceImports
/// service imports
var shared = require("../../../shared");
var ActivitiesService = (function () {
    // START_CUSTOM_CODE_activitiesModelServiceAdditionalProperties
    // END_CUSTOM_CODE_activitiesModelServiceAdditionalProperties
    function ActivitiesService(
        // START_CUSTOM_CODE_activitiesModelServiceConstructorDependencies
        // END_CUSTOM_CODE_activitiesModelServiceConstructorDependencies
        _provider, _http) {
        // START_CUSTOM_CODE_activitiesModelServiceConstructorMethods
        this._provider = _provider;
        this._http = _http;
        // END_CUSTOM_CODE_activitiesModelServiceConstructorMethods
    }
    Object.defineProperty(ActivitiesService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    ActivitiesService.prototype.getAll = function () {
        var res, headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(this._provider.url, {
            headers: headers
        });
    };
    return ActivitiesService;
}());
ActivitiesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).jsonProviderService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object])
], ActivitiesService);
exports.ActivitiesService = ActivitiesService;
var _a, _b;
//# sourceMappingURL=activities.service.js.map