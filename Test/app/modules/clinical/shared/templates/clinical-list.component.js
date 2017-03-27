"use strict";
var core_1 = require("@angular/core");
var ClinicalListComponent = (function () {
    function ClinicalListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    /// Add fields instance
    ClinicalListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    ClinicalListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return ClinicalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ClinicalListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ClinicalListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClinicalListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClinicalListComponent.prototype, "navigate", void 0);
ClinicalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-clinical-list",
        templateUrl: "clinical-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ClinicalListComponent);
exports.ClinicalListComponent = ClinicalListComponent;
//# sourceMappingURL=clinical-list.component.js.map