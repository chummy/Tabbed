"use strict";
var core_1 = require("@angular/core");
var UserDetailViewListComponent = (function () {
    function UserDetailViewListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    /// Add fields instance
    UserDetailViewListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    UserDetailViewListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return UserDetailViewListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserDetailViewListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserDetailViewListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserDetailViewListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserDetailViewListComponent.prototype, "navigate", void 0);
UserDetailViewListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-userDetailView-list",
        templateUrl: "userDetailView-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], UserDetailViewListComponent);
exports.UserDetailViewListComponent = UserDetailViewListComponent;
//# sourceMappingURL=userDetailView-list.component.js.map