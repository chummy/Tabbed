"use strict";
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Storage = require("application-settings");
var shared = require("../../../shared");
var LoginService = (function () {
    function LoginService(_provider) {
        this._provider = _provider;
        this._users = this._provider.instance.users;
    }
    LoginService.prototype.signIn = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._users
                .login(user.username, user.password)
                .then(function (data) { return resolve(data.result); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    LoginService.prototype.signUp = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._users
                .register(user.username, user.password, null)
                .then(function (data) { return resolve(data.result); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    LoginService.prototype.signOut = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._users
                .logout()
                .then(function (data) { return resolve(data.result); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    LoginService.prototype.currentUser = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._users
                .currentUser()
                .then(function (data) { return resolve(data.result); })
                .catch(function (error) { return reject(error); });
        });
        return Observable_1.Observable.fromPromise(promise);
    };
    LoginService.prototype.hasCredentials = function () {
        var username = Storage.getString("username");
        var password = Storage.getString("password");
        if (username && password) {
            return true;
        }
        return false;
    };
    LoginService.prototype.getCredentials = function () {
        var username = Storage.getString("username");
        var password = Storage.getString("password");
        return {
            username: username,
            password: password
        };
    };
    LoginService.prototype.setCredentials = function (data) {
        Storage.setString("username", data.username);
        Storage.setString("password", data.password);
    };
    LoginService.prototype.clearCredentials = function () {
        Storage.clear();
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = (typeof shared !== "undefined" && shared).backendServicesService) === "function" && _a || Object])
], LoginService);
exports.LoginService = LoginService;
var _a;
//# sourceMappingURL=login.service.js.map