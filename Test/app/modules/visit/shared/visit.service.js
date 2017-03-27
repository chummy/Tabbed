"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// START_CUSTOM_CODE_visitModelServiceImports
// END_CUSTOM_CODE_visitModelServiceImports
/// service imports
var shared = require("../../../shared");
var VisitService = (function () {
    // START_CUSTOM_CODE_visitModelServiceAdditionalProperties
    // END_CUSTOM_CODE_visitModelServiceAdditionalProperties
    function VisitService(
        // START_CUSTOM_CODE_visitModelServiceConstructorDependencies
        // END_CUSTOM_CODE_visitModelServiceConstructorDependencies
        _provider, _http) {
        // START_CUSTOM_CODE_visitModelServiceConstructorMethods
        this._provider = _provider;
        this._http = _http;
        // END_CUSTOM_CODE_visitModelServiceConstructorMethods
    }
    Object.defineProperty(VisitService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    VisitService.prototype.getAll = function () {
        var res, headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(this._provider.url, {
            headers: headers
        });
    };
    return VisitService;
}());
VisitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).jsonProviderService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object])
], VisitService);
exports.VisitService = VisitService;
var _a, _b;
//# sourceMappingURL=visit.service.js.map