"use strict";
var core_1 = require("@angular/core");
var PatientsDetailViewListComponent = (function () {
    function PatientsDetailViewListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
    }
    PatientsDetailViewListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    PatientsDetailViewListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    return PatientsDetailViewListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PatientsDetailViewListComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PatientsDetailViewListComponent.prototype, "items", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PatientsDetailViewListComponent.prototype, "select", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PatientsDetailViewListComponent.prototype, "navigate", void 0);
__decorate([
    core_1.ViewChild("surnameTextBlock"),
    __metadata("design:type", Object)
], PatientsDetailViewListComponent.prototype, "surnameTextBlockInst", void 0);
__decorate([
    core_1.ViewChild("nameTextBlock"),
    __metadata("design:type", Object)
], PatientsDetailViewListComponent.prototype, "nameTextBlockInst", void 0);
PatientsDetailViewListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-patientsDetailView-list",
        templateUrl: "patientsDetailView-list.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], PatientsDetailViewListComponent);
exports.PatientsDetailViewListComponent = PatientsDetailViewListComponent;
//# sourceMappingURL=patientsDetailView-list.component.js.map