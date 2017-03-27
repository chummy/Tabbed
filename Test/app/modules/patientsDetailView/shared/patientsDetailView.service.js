"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
// START_CUSTOM_CODE_patientsDetailViewModelServiceImports
// END_CUSTOM_CODE_patientsDetailViewModelServiceImports
/// service imports
var shared = require("../../../shared");
var PatientsDetailViewService = (function () {
    // START_CUSTOM_CODE_patientsDetailViewModelServiceAdditionalProperties
    // END_CUSTOM_CODE_patientsDetailViewModelServiceAdditionalProperties
    function PatientsDetailViewService(
        // START_CUSTOM_CODE_patientsDetailViewModelServiceConstructorDependencies
        // END_CUSTOM_CODE_patientsDetailViewModelServiceConstructorDependencies
        _provider) {
        this._provider = _provider;
        this._data = _provider.instance.data("Patients");
        // START_CUSTOM_CODE_patientsDetailViewModelServiceConstructorMethods
        // END_CUSTOM_CODE_patientsDetailViewModelServiceConstructorMethods
    }
    Object.defineProperty(PatientsDetailViewService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    PatientsDetailViewService.prototype.get = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    PatientsDetailViewService.prototype.getDbCollection = function (dbName) {
        var db = this._provider.instance.data(dbName);
        var promise = new Promise(function (resolve, reject) {
            db
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    return PatientsDetailViewService;
}());
PatientsDetailViewService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).backendServicesService) === "function" && _a || Object])
], PatientsDetailViewService);
exports.PatientsDetailViewService = PatientsDetailViewService;
var _a;
//# sourceMappingURL=patientsDetailView.service.js.map