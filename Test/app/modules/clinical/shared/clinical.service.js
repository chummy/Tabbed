"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// START_CUSTOM_CODE_clinicalModelServiceImports
// END_CUSTOM_CODE_clinicalModelServiceImports
/// service imports
var shared = require("../../../shared");
var ClinicalService = (function () {
    // START_CUSTOM_CODE_clinicalModelServiceAdditionalProperties
    // END_CUSTOM_CODE_clinicalModelServiceAdditionalProperties
    function ClinicalService(
        // START_CUSTOM_CODE_clinicalModelServiceConstructorDependencies
        // END_CUSTOM_CODE_clinicalModelServiceConstructorDependencies
        _provider, _http) {
        // START_CUSTOM_CODE_clinicalModelServiceConstructorMethods
        this._provider = _provider;
        this._http = _http;
        // END_CUSTOM_CODE_clinicalModelServiceConstructorMethods
    }
    Object.defineProperty(ClinicalService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    ClinicalService.prototype.getAll = function () {
        var res, headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(this._provider.url, {
            headers: headers
        });
    };
    return ClinicalService;
}());
ClinicalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).jsonProviderService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object])
], ClinicalService);
exports.ClinicalService = ClinicalService;
var _a, _b;
//# sourceMappingURL=clinical.service.js.map