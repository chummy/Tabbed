"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var PatientsEditComponent = (function () {
    /// placeholder for field
    function PatientsEditComponent() {
        this.update = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        /// placeholder for component constructor
    }
    Object.defineProperty(PatientsEditComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    PatientsEditComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
    };
    PatientsEditComponent.prototype.onUpdate = function () {
        this.update.emit({
            item: this.item
        });
    };
    PatientsEditComponent.prototype.onDelete = function () {
        this.delete.emit({
            item: this.item
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PatientsEditComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PatientsEditComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PatientsEditComponent.prototype, "update", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PatientsEditComponent.prototype, "delete", void 0);
    __decorate([
        core_1.ViewChild("mpifield"), 
        __metadata('design:type', Object)
    ], PatientsEditComponent.prototype, "mpifieldInst", void 0);
    PatientsEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-patients-edit",
            templateUrl: "patients-edit.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsEditComponent);
    return PatientsEditComponent;
}());
exports.PatientsEditComponent = PatientsEditComponent;
//# sourceMappingURL=patients-edit.component.js.map