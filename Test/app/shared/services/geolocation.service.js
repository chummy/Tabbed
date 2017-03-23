"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var geolocation = require("nativescript-geolocation");
var GeolocationService = (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.getLocation = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (!geolocation.isEnabled()) {
                geolocation.enableLocationRequest()
                    .then(function () {
                    _this._getCurrentLocation().subscribe(function (location) {
                        resolve(location);
                    });
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
            else {
                _this._getCurrentLocation().subscribe(function (location) {
                    resolve(location);
                });
            }
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    GeolocationService.prototype._getCurrentLocation = function () {
        var promise = new Promise(function (resolve, reject) {
            geolocation.getCurrentLocation({ timeout: 20000 })
                .then(function (location) {
                var newLocation = {
                    latitude: location.latitude,
                    longitude: location.longitude
                };
                resolve(newLocation);
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    GeolocationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GeolocationService);
    return GeolocationService;
}());
exports.GeolocationService = GeolocationService;
//# sourceMappingURL=geolocation.service.js.map