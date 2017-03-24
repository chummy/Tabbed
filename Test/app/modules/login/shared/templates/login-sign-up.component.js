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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LoginSignUpComponent.prototype, "user", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginSignUpComponent.prototype, "signup", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginSignUpComponent.prototype, "navigate", void 0);
    LoginSignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login-sign-up",
            templateUrl: "login-sign-up.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [shared.NotificationService])
    ], LoginSignUpComponent);
    return LoginSignUpComponent;
}());
exports.LoginSignUpComponent = LoginSignUpComponent;
//# sourceMappingURL=login-sign-up.component.js.map