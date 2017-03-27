"use strict";
var core_1 = require("@angular/core");
var ObservationsListComponent = (function () {
    function ObservationsListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    /// Add fields instance
    ObservationsListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    ObservationsListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return ObservationsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ObservationsListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ObservationsListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ObservationsListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ObservationsListComponent.prototype, "navigate", void 0);
ObservationsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-observations-list",
        templateUrl: "observations-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ObservationsListComponent);
exports.ObservationsListComponent = ObservationsListComponent;
//# sourceMappingURL=observations-list.component.js.map