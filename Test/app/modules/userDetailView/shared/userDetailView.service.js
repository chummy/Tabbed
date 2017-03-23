"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
// START_CUSTOM_CODE_userDetailViewModelServiceImports
// END_CUSTOM_CODE_userDetailViewModelServiceImports
/// service imports
var shared = require("../../../shared");
var UserDetailViewService = (function () {
    // START_CUSTOM_CODE_userDetailViewModelServiceAdditionalProperties
    // END_CUSTOM_CODE_userDetailViewModelServiceAdditionalProperties
    function UserDetailViewService(
        // START_CUSTOM_CODE_userDetailViewModelServiceConstructorDependencies
        // END_CUSTOM_CODE_userDetailViewModelServiceConstructorDependencies
        _provider) {
        this._provider = _provider;
        this._data = _provider.instance.data("Users");
        // START_CUSTOM_CODE_userDetailViewModelServiceConstructorMethods
        // END_CUSTOM_CODE_userDetailViewModelServiceConstructorMethods
    }
    Object.defineProperty(UserDetailViewService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    UserDetailViewService.prototype.get = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    UserDetailViewService.prototype.getDbCollection = function (dbName) {
        var db = this._provider.instance.data(dbName);
        var promise = new Promise(function (resolve, reject) {
            db
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    UserDetailViewService.prototype.post = function (item) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .create(item)
                .then(function (data) { return resolve(data.result); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    UserDetailViewService.prototype.put = function (item) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .updateSingle(item)
                .then(function (data) { return resolve(data); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    UserDetailViewService.prototype.delete = function (item) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .destroySingle(item)
                .then(function (data) { return resolve(data); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    return UserDetailViewService;
}());
UserDetailViewService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).backendServicesService) === "function" && _a || Object])
], UserDetailViewService);
exports.UserDetailViewService = UserDetailViewService;
var _a;
//# sourceMappingURL=userDetailView.service.js.map