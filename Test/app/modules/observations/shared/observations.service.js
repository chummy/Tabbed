"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// START_CUSTOM_CODE_observationsModelServiceImports
// END_CUSTOM_CODE_observationsModelServiceImports
/// service imports
var shared = require("../../../shared");
var ObservationsService = (function () {
    // START_CUSTOM_CODE_observationsModelServiceAdditionalProperties
    // END_CUSTOM_CODE_observationsModelServiceAdditionalProperties
    function ObservationsService(
        // START_CUSTOM_CODE_observationsModelServiceConstructorDependencies
        // END_CUSTOM_CODE_observationsModelServiceConstructorDependencies
        _provider, _http) {
        // START_CUSTOM_CODE_observationsModelServiceConstructorMethods
        this._provider = _provider;
        this._http = _http;
        // END_CUSTOM_CODE_observationsModelServiceConstructorMethods
    }
    Object.defineProperty(ObservationsService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    ObservationsService.prototype.getAll = function () {
        var res, headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(this._provider.url, {
            headers: headers
        });
    };
    return ObservationsService;
}());
ObservationsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).jsonProviderService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object])
], ObservationsService);
exports.ObservationsService = ObservationsService;
var _a, _b;
//# sourceMappingURL=observations.service.js.map