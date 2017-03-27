"use strict";
var core_1 = require("@angular/core");
var UsersListComponent = (function () {
    function UsersListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    /// Add fields instance
    UsersListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    UsersListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return UsersListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UsersListComponent.prototype, "navigate", void 0);
UsersListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-users-list",
        templateUrl: "users-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], UsersListComponent);
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map