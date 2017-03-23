"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
// START_CUSTOM_CODE_commentsDetailViewModelServiceImports
// END_CUSTOM_CODE_commentsDetailViewModelServiceImports
/// service imports
var shared = require("../../../shared");
var CommentsDetailViewService = (function () {
    // START_CUSTOM_CODE_commentsDetailViewModelServiceAdditionalProperties
    // END_CUSTOM_CODE_commentsDetailViewModelServiceAdditionalProperties
    function CommentsDetailViewService(
        // START_CUSTOM_CODE_commentsDetailViewModelServiceConstructorDependencies
        // END_CUSTOM_CODE_commentsDetailViewModelServiceConstructorDependencies
        _provider) {
        this._provider = _provider;
        this._data = _provider.instance.data("Activities");
        // START_CUSTOM_CODE_commentsDetailViewModelServiceConstructorMethods
        // END_CUSTOM_CODE_commentsDetailViewModelServiceConstructorMethods
    }
    Object.defineProperty(CommentsDetailViewService.prototype, "provider", {
        get: function () {
            return this._provider;
        },
        enumerable: true,
        configurable: true
    });
    CommentsDetailViewService.prototype.get = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._data
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    CommentsDetailViewService.prototype.getDbCollection = function (dbName) {
        var db = this._provider.instance.data(dbName);
        var promise = new Promise(function (resolve, reject) {
            db
                .get()
                .then(function (data) { return resolve(data.result || []); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    return CommentsDetailViewService;
}());
CommentsDetailViewService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).backendServicesService) === "function" && _a || Object])
], CommentsDetailViewService);
exports.CommentsDetailViewService = CommentsDetailViewService;
var _a;
//# sourceMappingURL=commentsDetailView.service.js.map