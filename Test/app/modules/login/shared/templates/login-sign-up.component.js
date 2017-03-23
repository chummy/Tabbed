"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var LoginSignUpComponent = (function () {
    function LoginSignUpComponent(_notificationService) {
        this._notificationService = _notificationService;
        this.signup = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
    }
    Object.defineProperty(LoginSignUpComponent.prototype, "user", {
        set: function (value) {
            this.selectedUser = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    LoginSignUpComponent.prototype.onSignUp = function () {
        if (!this.selectedUser.username || !this.selectedUser.password) {
            this._notificationService.error("Missing credentials.");
            return;
        }
        this.signup.emit({
            user: this.selectedUser
        });
    };
    LoginSignUpComponent.prototype.onNavigate = function () {
        this.navigate.emit();
    };
    return LoginSignUpComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).User) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).User) === "function" && _b || Object])
], LoginSignUpComponent.prototype, "user", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginSignUpComponent.prototype, "signup", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginSignUpComponent.prototype, "navigate", void 0);
LoginSignUpComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-login-sign-up",
        templateUrl: "login-sign-up.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = (typeof shared !== "undefined" && shared).NotificationService) === "function" && _c || Object])
], LoginSignUpComponent);
exports.LoginSignUpComponent = LoginSignUpComponent;
var _a, _b, _c;
//# sourceMappingURL=login-sign-up.component.js.map