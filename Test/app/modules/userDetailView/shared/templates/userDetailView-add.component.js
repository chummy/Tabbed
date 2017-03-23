"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var UserDetailViewAddComponent = (function () {
    /// placeholder for field
    function UserDetailViewAddComponent() {
        this.add = new core_1.EventEmitter();
        /// placeholder for component constructor
    }
    Object.defineProperty(UserDetailViewAddComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    UserDetailViewAddComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
    };
    UserDetailViewAddComponent.prototype.onAdd = function () {
        this.add.emit({
            item: this.item
        });
    };
    return UserDetailViewAddComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserDetailViewAddComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], UserDetailViewAddComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserDetailViewAddComponent.prototype, "add", void 0);
__decorate([
    core_1.ViewChild("textField2"),
    __metadata("design:type", Object)
], UserDetailViewAddComponent.prototype, "textField2Inst", void 0);
__decorate([
    core_1.ViewChild("textField1"),
    __metadata("design:type", Object)
], UserDetailViewAddComponent.prototype, "textField1Inst", void 0);
UserDetailViewAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-userDetailView-add",
        templateUrl: "userDetailView-add.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], UserDetailViewAddComponent);
exports.UserDetailViewAddComponent = UserDetailViewAddComponent;
var _a, _b;
//# sourceMappingURL=userDetailView-add.component.js.map