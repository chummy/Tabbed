"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var PatientsAddComponent = (function () {
    /// placeholder for field
    function PatientsAddComponent() {
        this.add = new core_1.EventEmitter();
        /// placeholder for component constructor
    }
    Object.defineProperty(PatientsAddComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    PatientsAddComponent.prototype.ngOnInit = function () {
        /// placeholder for component init
    };
    PatientsAddComponent.prototype.onAdd = function () {
        this.add.emit({
            item: this.item
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PatientsAddComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PatientsAddComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PatientsAddComponent.prototype, "add", void 0);
    __decorate([
        core_1.ViewChild("mpifield"), 
        __metadata('design:type', Object)
    ], PatientsAddComponent.prototype, "mpifieldInst", void 0);
    PatientsAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-patients-add",
            templateUrl: "patients-add.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsAddComponent);
    return PatientsAddComponent;
}());
exports.PatientsAddComponent = PatientsAddComponent;
//# sourceMappingURL=patients-add.component.js.map