"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var LoginSignInComponent = (function () {
    function LoginSignInComponent(_notificationService) {
        this._notificationService = _notificationService;
        this.signin = new core_1.EventEmitter();
        this.signout = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
    }
    Object.defineProperty(LoginSignInComponent.prototype, "user", {
        set: function (value) {
            this.selectedUser = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    LoginSignInComponent.prototype.onSignIn = function () {
        if (!this.selectedUser.username || !this.selectedUser.password) {
            this._notificationService.error("Missing credentials.");
            return;
        }
        this.signin.emit({
            user: this.selectedUser,
            autoSignedIn: this.autoSignedIn
        });
    };
    LoginSignInComponent.prototype.onSignOut = function () {
        this.signout.emit();
    };
    LoginSignInComponent.prototype.onNavigate = function () {
        this.navigate.emit();
    };
    return LoginSignInComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).User) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).User) === "function" && _b || Object])
], LoginSignInComponent.prototype, "user", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LoginSignInComponent.prototype, "signedInOption", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], LoginSignInComponent.prototype, "signedInAutoOption", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginSignInComponent.prototype, "signin", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginSignInComponent.prototype, "signout", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginSignInComponent.prototype, "navigate", void 0);
LoginSignInComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-login-sign-in",
        templateUrl: "login-sign-in.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = (typeof shared !== "undefined" && shared).NotificationService) === "function" && _c || Object])
], LoginSignInComponent);
exports.LoginSignInComponent = LoginSignInComponent;
var _a, _b, _c;
//# sourceMappingURL=login-sign-in.component.js.map