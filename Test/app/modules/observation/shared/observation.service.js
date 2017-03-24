"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
// START_CUSTOM_CODE_observationModelServiceImports
// END_CUSTOM_CODE_observationModelServiceImports
/// service imports
var shared = require("../../../shared");
var ObservationService = (function () {
    // START_CUSTOM_CODE_observationModelServiceAdditionalProperties
    // END_CUSTOM_CODE_observationModelServiceAdditionalProperties
    function ObservationService(
        // START_CUSTOM_CODE_observationModelServiceConstructorDependencies
        // END_CUSTOM_CODE_observationModelServiceConstructorDependencies
        _provider) {
        // START_CUSTOM_CODE_observationModelServiceConstructorMethod
        this._provider = _provider;
        // END_CUSTOM_CODE_observationModelServiceConstructorMethod
        this._data = _provider.instance.data("Comments");
    }
    Object.defineProperty(ObservationService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    ObservationService.prototype.post = function (item) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .create(item)
                .then(function (data) { return resolve(data.result || {}); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    ObservationService.prototype.get = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    ObservationService.prototype.getDbCollection = function (dbName) {
        var db = this.provider.instance.data(dbName);
        var promise = new Promise(function (resolve, reject) {
            db
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    ObservationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [shared.backendServicesService])
    ], ObservationService);
    return ObservationService;
}());
exports.ObservationService = ObservationService;
//# sourceMappingURL=observation.service.js.map