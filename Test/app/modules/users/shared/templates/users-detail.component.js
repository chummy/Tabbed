"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var UsersDetailComponent = (function () {
    function UsersDetailComponent() {
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
        // START_CUSTOM_CODE_usersModelDetailComponentAdditionalMethods
        // END_CUSTOM_CODE_usersModelDetailComponentAdditionalMethods
    }
    Object.defineProperty(UsersDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    UsersDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    return UsersDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UsersDetailComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], UsersDetailComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UsersDetailComponent.prototype, "navigate", void 0);
UsersDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-users-detail",
        templateUrl: "users-detail.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], UsersDetailComponent);
exports.UsersDetailComponent = UsersDetailComponent;
var _a, _b;
//# sourceMappingURL=users-detail.component.js.map