"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var UsersAddComponent = (function () {
    /// placeholder for field
    function UsersAddComponent() {
        this.add = new core_1.EventEmitter();
        /// placeholder for component constructor
    }
    Object.defineProperty(UsersAddComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    UsersAddComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
    };
    UsersAddComponent.prototype.onAdd = function () {
        this.add.emit({
            item: this.item
        });
    };
    return UsersAddComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UsersAddComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], UsersAddComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UsersAddComponent.prototype, "add", void 0);
__decorate([
    core_1.ViewChild("identityField"),
    __metadata("design:type", Object)
], UsersAddComponent.prototype, "identityFieldInst", void 0);
__decorate([
    core_1.ViewChild("passwordField"),
    __metadata("design:type", Object)
], UsersAddComponent.prototype, "passwordFieldInst", void 0);
__decorate([
    core_1.ViewChild("emailField"),
    __metadata("design:type", Object)
], UsersAddComponent.prototype, "emailFieldInst", void 0);
__decorate([
    core_1.ViewChild("usernameField"),
    __metadata("design:type", Object)
], UsersAddComponent.prototype, "usernameFieldInst", void 0);
UsersAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-users-add",
        templateUrl: "users-add.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], UsersAddComponent);
exports.UsersAddComponent = UsersAddComponent;
var _a, _b;
//# sourceMappingURL=users-add.component.js.map