"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
// START_CUSTOM_CODE_formViewModelServiceImports
// END_CUSTOM_CODE_formViewModelServiceImports
/// service imports
var shared = require("../../../shared");
var FormViewService = (function () {
    // START_CUSTOM_CODE_formViewModelServiceAdditionalProperties
    // END_CUSTOM_CODE_formViewModelServiceAdditionalProperties
    function FormViewService(
        // START_CUSTOM_CODE_formViewModelServiceConstructorDependencies
        // END_CUSTOM_CODE_formViewModelServiceConstructorDependencies
        _provider) {
        // START_CUSTOM_CODE_formViewModelServiceConstructorMethod
        this._provider = _provider;
        // END_CUSTOM_CODE_formViewModelServiceConstructorMethod
        this._data = _provider.instance.data("Users");
    }
    Object.defineProperty(FormViewService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    FormViewService.prototype.post = function (item) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .create(item)
                .then(function (data) { return resolve(data.result || {}); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    FormViewService.prototype.get = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    FormViewService.prototype.getDbCollection = function (dbName) {
        var db = this.provider.instance.data(dbName);
        var promise = new Promise(function (resolve, reject) {
            db
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    FormViewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [shared.backendServicesService])
    ], FormViewService);
    return FormViewService;
}());
exports.FormViewService = FormViewService;
//# sourceMappingURL=formView.service.js.map