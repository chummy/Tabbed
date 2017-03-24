"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// START_CUSTOM_CODE_patientsModelServiceImports
// END_CUSTOM_CODE_patientsModelServiceImports
/// service imports
var shared = require("../../../shared");
var PatientsService = (function () {
    // START_CUSTOM_CODE_patientsModelServiceAdditionalProperties
    // END_CUSTOM_CODE_patientsModelServiceAdditionalProperties
    function PatientsService(
        // START_CUSTOM_CODE_patientsModelServiceConstructorDependencies
        // END_CUSTOM_CODE_patientsModelServiceConstructorDependencies
        _provider, _http) {
        // START_CUSTOM_CODE_patientsModelServiceConstructorMethods
        this._provider = _provider;
        this._http = _http;
        // END_CUSTOM_CODE_patientsModelServiceConstructorMethods
    }
    Object.defineProperty(PatientsService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    PatientsService.prototype.getAll = function () {
        var res, headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http.get(this._provider.url, {
            headers: headers
        });
    };
    PatientsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [shared.jsonProviderService, http_1.Http])
    ], PatientsService);
    return PatientsService;
}());
exports.PatientsService = PatientsService;
//# sourceMappingURL=patients.service.js.map