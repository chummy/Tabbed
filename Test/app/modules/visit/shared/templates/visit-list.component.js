"use strict";
var core_1 = require("@angular/core");
var VisitListComponent = (function () {
    function VisitListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    /// Add fields instance
    VisitListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    VisitListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return VisitListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VisitListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VisitListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VisitListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VisitListComponent.prototype, "navigate", void 0);
VisitListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-visit-list",
        templateUrl: "visit-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], VisitListComponent);
exports.VisitListComponent = VisitListComponent;
//# sourceMappingURL=visit-list.component.js.map