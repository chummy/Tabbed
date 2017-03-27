"use strict";
var core_1 = require("@angular/core");
var ActivitiesListComponent = (function () {
    function ActivitiesListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    /// Add fields instance
    ActivitiesListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    ActivitiesListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return ActivitiesListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActivitiesListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ActivitiesListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActivitiesListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ActivitiesListComponent.prototype, "navigate", void 0);
ActivitiesListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-activities-list",
        templateUrl: "activities-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ActivitiesListComponent);
exports.ActivitiesListComponent = ActivitiesListComponent;
//# sourceMappingURL=activities-list.component.js.map