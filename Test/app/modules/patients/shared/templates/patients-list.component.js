"use strict";
var core_1 = require("@angular/core");
var PatientsListComponent = (function () {
    function PatientsListComponent() {
        this.select = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
    }
    /// Add fields instance
    PatientsListComponent.prototype.onSelect = function (item) {
        this.select.emit({
            item: item
        });
    };
    PatientsListComponent.prototype.onAdd = function () {
        this.navigate.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PatientsListComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PatientsListComponent.prototype, "items", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PatientsListComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PatientsListComponent.prototype, "navigate", void 0);
    PatientsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-patients-list",
            templateUrl: "patients-list.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsListComponent);
    return PatientsListComponent;
}());
exports.PatientsListComponent = PatientsListComponent;
//# sourceMappingURL=patients-list.component.js.map