"use strict";
var core_1 = require("@angular/core");
var shared = require("../../../../shared");
var VisitDetailComponent = (function () {
    function VisitDetailComponent() {
        this.navigate = new core_1.EventEmitter();
        /// partial additional methods
        // START_CUSTOM_CODE_visitModelDetailComponentAdditionalMethods
        // END_CUSTOM_CODE_visitModelDetailComponentAdditionalMethods
    }
    Object.defineProperty(VisitDetailComponent.prototype, "current", {
        set: function (value) {
            this.item = Object.assign({}, value);
        },
        enumerable: true,
        configurable: true
    });
    VisitDetailComponent.prototype.onEdit = function () {
        this.navigate.emit();
    };
    return VisitDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "service", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = (typeof shared !== "undefined" && shared).Item) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = (typeof shared !== "undefined" && shared).Item) === "function" && _b || Object])
], VisitDetailComponent.prototype, "current", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "navigate", void 0);
__decorate([
    core_1.ViewChild("workTelField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "workTelFieldInst", void 0);
__decorate([
    core_1.ViewChild("trackingNoField1"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "trackingNoField1Inst", void 0);
__decorate([
    core_1.ViewChild("surnameField1"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "surnameField1Inst", void 0);
__decorate([
    core_1.ViewChild("suburbField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "suburbFieldInst", void 0);
__decorate([
    core_1.ViewChild("streetField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "streetFieldInst", void 0);
__decorate([
    core_1.ViewChild("provinceField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "provinceFieldInst", void 0);
__decorate([
    core_1.ViewChild("postalCodeField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "postalCodeFieldInst", void 0);
__decorate([
    core_1.ViewChild("mobileField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "mobileFieldInst", void 0);
__decorate([
    core_1.ViewChild("medicalAidPlanField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "medicalAidPlanFieldInst", void 0);
__decorate([
    core_1.ViewChild("medicalAidNoField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "medicalAidNoFieldInst", void 0);
__decorate([
    core_1.ViewChild("medicalAidField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "medicalAidFieldInst", void 0);
__decorate([
    core_1.ViewChild("mPidfield"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "mPidfieldInst", void 0);
__decorate([
    core_1.ViewChild("locIdfield"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "locIdfieldInst", void 0);
__decorate([
    core_1.ViewChild("homeTelField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "homeTelFieldInst", void 0);
__decorate([
    core_1.ViewChild("genderField1"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "genderField1Inst", void 0);
__decorate([
    core_1.ViewChild("garWorkTelField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garWorkTelFieldInst", void 0);
__decorate([
    core_1.ViewChild("garSurnameField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garSurnameFieldInst", void 0);
__decorate([
    core_1.ViewChild("garSuburbField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garSuburbFieldInst", void 0);
__decorate([
    core_1.ViewChild("garStreetField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garStreetFieldInst", void 0);
__decorate([
    core_1.ViewChild("garRelation"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garRelationInst", void 0);
__decorate([
    core_1.ViewChild("garPcodeField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garPcodeFieldInst", void 0);
__decorate([
    core_1.ViewChild("garMobile"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garMobileInst", void 0);
__decorate([
    core_1.ViewChild("garInitField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garInitFieldInst", void 0);
__decorate([
    core_1.ViewChild("garHomeTelField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garHomeTelFieldInst", void 0);
__decorate([
    core_1.ViewChild("garEmailField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garEmailFieldInst", void 0);
__decorate([
    core_1.ViewChild("garCityField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "garCityFieldInst", void 0);
__decorate([
    core_1.ViewChild("firstnameField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "firstnameFieldInst", void 0);
__decorate([
    core_1.ViewChild("emailField1"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "emailField1Inst", void 0);
__decorate([
    core_1.ViewChild("dischargedField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "dischargedFieldInst", void 0);
__decorate([
    core_1.ViewChild("dischargeReasonField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "dischargeReasonFieldInst", void 0);
__decorate([
    core_1.ViewChild("dependantNoField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "dependantNoFieldInst", void 0);
__decorate([
    core_1.ViewChild("deceasedField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "deceasedFieldInst", void 0);
__decorate([
    core_1.ViewChild("dObfield"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "dObfieldInst", void 0);
__decorate([
    core_1.ViewChild("cityField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "cityFieldInst", void 0);
__decorate([
    core_1.ViewChild("bedField1"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "bedField1Inst", void 0);
__decorate([
    core_1.ViewChild("ageField1"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "ageField1Inst", void 0);
__decorate([
    core_1.ViewChild("admittedField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "admittedFieldInst", void 0);
__decorate([
    core_1.ViewChild("accNoField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "accNoFieldInst", void 0);
__decorate([
    core_1.ViewChild("idnoField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "idnoFieldInst", void 0);
__decorate([
    core_1.ViewChild("hospitalField"),
    __metadata("design:type", Object)
], VisitDetailComponent.prototype, "hospitalFieldInst", void 0);
VisitDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-visit-detail",
        templateUrl: "visit-detail.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], VisitDetailComponent);
exports.VisitDetailComponent = VisitDetailComponent;
var _a, _b;
//# sourceMappingURL=visit-detail.component.js.map