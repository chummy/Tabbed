"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var PatientsDetailComponent = (function () {
    function PatientsDetailComponent() {
        this.navigate = new core_1.EventEmitter();
    }
    Object.defineProperty(PatientsDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    PatientsDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PatientsDetailComponent.prototype, "current", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "navigate", void 0);
    __decorate([
        core_1.ViewChild("wardField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "wardFieldInst", void 0);
    __decorate([
        core_1.ViewChild("surnameField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "surnameFieldInst", void 0);
    __decorate([
        core_1.ViewChild("patientNoField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "patientNoFieldInst", void 0);
    __decorate([
        core_1.ViewChild("obsNewField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "obsNewFieldInst", void 0);
    __decorate([
        core_1.ViewChild("obsCntField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "obsCntFieldInst", void 0);
    __decorate([
        core_1.ViewChild("nameField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "nameFieldInst", void 0);
    __decorate([
        core_1.ViewChild("labNewField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "labNewFieldInst", void 0);
    __decorate([
        core_1.ViewChild("labCntField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "labCntFieldInst", void 0);
    __decorate([
        core_1.ViewChild("hospitalField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "hospitalFieldInst", void 0);
    __decorate([
        core_1.ViewChild("genderField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "genderFieldInst", void 0);
    __decorate([
        core_1.ViewChild("evtNewField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "evtNewFieldInst", void 0);
    __decorate([
        core_1.ViewChild("evtCntField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "evtCntFieldInst", void 0);
    __decorate([
        core_1.ViewChild("doctorIdfield"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "doctorIdfieldInst", void 0);
    __decorate([
        core_1.ViewChild("clnNewField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "clnNewFieldInst", void 0);
    __decorate([
        core_1.ViewChild("clnCntField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "clnCntFieldInst", void 0);
    __decorate([
        core_1.ViewChild("bedField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "bedFieldInst", void 0);
    __decorate([
        core_1.ViewChild("ageField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "ageFieldInst", void 0);
    __decorate([
        core_1.ViewChild("trackingNoField"), 
        __metadata('design:type', Object)
    ], PatientsDetailComponent.prototype, "trackingNoFieldInst", void 0);
    PatientsDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-patients-detail",
            templateUrl: "patients-detail.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], PatientsDetailComponent);
    return PatientsDetailComponent;
}());
exports.PatientsDetailComponent = PatientsDetailComponent;
//# sourceMappingURL=patients-detail.component.js.map